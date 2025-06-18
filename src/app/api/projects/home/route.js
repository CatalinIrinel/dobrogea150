import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find().limit(3);
  return NextResponse.json(projects);
}
