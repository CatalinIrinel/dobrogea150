import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { isAuth, isAdmin } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  await connectToDatabase();
  const project = await Project.findById(params.id);
  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}

export async function PUT(req, { params }) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);

  const updates = await req.json();
  const project = await Project.findById(params.id);
  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  Object.assign(project, updates);
  await project.save();

  return NextResponse.json({ message: 'Project Updated' });
}

export async function DELETE(_, { params }) {
  await connectToDatabase();
  await isAuth(_);
  await isAdmin(_);

  const project = await Project.findById(params.id);
  if (!project) {
    return NextResponse.json({ message: 'Project Not Found' }, { status: 404 });
  }

  await project.remove();
  return NextResponse.json({ message: 'Project Deleted' });
}
