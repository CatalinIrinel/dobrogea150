import { connectToDatabase } from '@/lib/db';
import { Tech } from '@/lib/models/techModel';
import { isAuth, isAdmin } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(_) {
  await connectToDatabase();
  const tech = await Tech.find();
  if (!tech) {
    return NextResponse.json({ message: 'Tech  not  found' }, { status: 404 });
  }
  return NextResponse.json(tech);
}

export async function POST(req,{params}){
  await connectToDatabase();
  await isAdmin(req);
  await isAuth(req);
}