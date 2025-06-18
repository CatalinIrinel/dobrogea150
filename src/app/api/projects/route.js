import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { isAdmin, isAuth } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = await Project.find().sort({ name: 1 });
  return NextResponse.json(projects);
}

export async function POST(req) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);

  const newProject = new Project({
    name: 'sample project' + Date.now(),
    technology: '/images/react.png.webp',
    link: 'sample link',
    image: '/images/babyfie.png.webp',
    description: 'sample description',
    imgStart: true,
  });

  const savedProject = await newProject.save();
  return NextResponse.json({
    message: 'Project Created',
    project: savedProject,
  });
}
