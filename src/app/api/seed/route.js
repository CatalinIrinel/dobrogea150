import { NextResponse } from 'next/server';
// import { User } from '@/lib/models/userModel';
import { Project } from '@/lib/models/projectModel';
import { proiecteInfo } from '@/components/data/projects';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  try {
    await connectToDatabase();

    await Project.deleteMany();
    const createdProjects = await Project.insertMany(proiecteInfo);

    // await User.deleteMany();
    // const createdUsers = await User.insertMany(data.users);

    return NextResponse.json({ createdProjects });
  } catch (error) {
    return NextResponse.json(
      { message: 'Seeding failed', error: error.message },
      { status: 500 }
    );
  }
}
