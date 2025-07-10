import { connectToDatabase } from '@/lib/db';
import { Obiectiv } from '@/lib/models/obiectivModel';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
  const { params } = await context;
  const { slug } = await params;

  try {
    await connectToDatabase();

    const obiectiv = await Obiectiv.findOne({ slug: slug });
    return NextResponse.json(obiectiv);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'A aparut o eroare la preluarea obiectivului',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
