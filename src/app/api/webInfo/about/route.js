import { connectToDatabase } from '@/lib/db';
import { websiteInfo } from '@/lib/models/websiteInfoModel';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectToDatabase();

    const despreInfo = await websiteInfo.findOne().select('aboutPage');
    return NextResponse.json(despreInfo);
  } catch (error) {
    return NextResponse.json(
      {
        message: 'A aparut o eroare la preluarea informatiilor de pe pagina',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
