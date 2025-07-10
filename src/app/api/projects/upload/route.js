import { NextResponse } from 'next/server';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';
import multer from 'multer';
import nextConnect from 'next-connect';
import { writeFile } from 'fs/promises';
import { isAuth } from '@/lib/auth'; // adapt this middleware

// Setup Multer storage to buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Set up handler using next-connect
const handler = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Server error: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  try {
    // Custom auth middleware (modify this as needed)
    const user = await isAuth(req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    const { projectTitle } = req.body;

    if (!req.file || !projectTitle) {
      return res.status(400).json({ error: 'Missing file or project title' });
    }

    // Safe folder name
    const safeTitle = slugify(projectTitle, {
      lower: true,
      strict: true, // removes special characters
      locale: 'ro', // optional, for diacritics handling
    });

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', safeTitle);
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${Date.now()}.webp`;
    const filePath = path.join(uploadDir, fileName);
    const fileLink = `/uploads/proiecte/${safeTitle}/${fileName}`;

    await sharp(req.file.buffer).webp({ quality: 80 }).toFile(filePath);

    return res.status(200).json({
      message: 'Image uploaded and converted',
      fileLink,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Next.js App Router wrapper
export const POST = async (req) => {
  return new Promise((resolve, reject) => {
    handler(req, {
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        resolve(NextResponse.json(data, { status: this.statusCode || 200 }));
      },
      end(data) {
        resolve(new NextResponse(data));
      },
    });
  });
};
