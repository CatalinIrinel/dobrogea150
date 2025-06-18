import { connectToDatabase } from '@/lib/db';
import { Tech } from '@/lib/models/techModel';
import { isAuth, isAdmin } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);
  const techId = params.id;
  const tech = Tech.findById(techId);

  if (!tech) {
    return NextResponse.json({ message: 'Tech not found' }, { status: 404 });
  }
  const updates = await req.json();

  Object.assign(tech, updates);
  await tech.save();
  return NextResponse.json({ message: 'Tech updated' });
}

export async function DELETE(req, { params }) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);
  const techId = params.id;
  const tech = Tech.findById(techId);

  if (!tech) {
    return NextResponse.json({ message: 'Tech not found' }, { status: 404 });
  }

  await tech.remove();
  return NextResponse.json({ message: 'Tech removed' });
}
