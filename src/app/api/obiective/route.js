import { connectToDatabase } from '@/lib/db';
import { Obiectiv } from '@/lib/models/obiectivModel';
import { isAdmin, isAuth } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
  const PAGE_SIZE = 10;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const pageSize = parseInt(searchParams.get('pageSize')) || PAGE_SIZE;

  try {
    await connectToDatabase();

    const obiective = await Obiectiv.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    const countObiective = await Obiectiv.countDocuments();
    return NextResponse.json({
      obiective,
      page,
      pages: Math.ceil(countObiective / pageSize),
    });
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
