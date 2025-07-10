import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { NextResponse } from 'next/server';

export async function GET(_, context) {
  const { params } = await context;
  const { slug } = await params;

  await connectToDatabase();

  const project = await Project.findOne({ slug: slug });

  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
