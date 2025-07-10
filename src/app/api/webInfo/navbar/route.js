import { connectToDatabase } from '@/lib/db';
import { websiteInfo } from '@/lib/models/websiteInfoModel';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectToDatabase();

    const navbar = await websiteInfo.findOne().select('navbar');
    return NextResponse.json(navbar);
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

export async function PUT(req) {
  try {
    await connectToDatabase();

    const body = await req.json();
    const { logo, navMenu } = body;

    const updated = await websiteInfo.findOneAndUpdate(
      {},
      {
        $set: {
          'navbar.logo': logo,
          'navbar.navMenu': navMenu,
        },
      },
      {
        new: true,
      }
    );
    if (!updated) {
      return NextResponse.json(
        { message: 'Documentul websiteInfo nu a fost gasit' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Navbar actualizat cu succes',
      navbar: updated.navbar,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'A aparut o eroare la actualizarea navbar-ului',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
