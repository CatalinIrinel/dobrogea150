import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { isAuth, isAdmin } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function PUT(req, {params}) {
  try {
    await connectToDatabase();
    const user = await isAuth(req);
    const userAdmin = await isAdmin(req);
    if(user) {
        if(!userAdmin){
            return NextResponse.json({message: 'Neautorizat, utilizatorul nu este admin'}, {status:401})
        }
    } 

    const id = params.id
    const {
      title,
      slug,
      description,
      image,
      galleryImages,
      dateStart,
      dateEnd,
      state,
    } = await req.json(); // ✅ correctly parse request body

    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    // ✅ Update only the changed fields
    Object.assign(project, {
      title,
      slug,
      description,
      image,
      galleryImages,
      dateStart,
      dateEnd,
      state,
    });

    await project.save();

    return NextResponse.json({
      message: 'Project updated successfully',
      project,
    });
  } catch (error) {
    console.error('PUT /api/projects/editare/:id Error:', error);

    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req,{params}){
    try {
    await connectToDatabase();
    const user = await isAuth(req);
    const userAdmin = await isAdmin(req);

    if(user) {
        if(!userAdmin){
            return NextResponse.json({message: 'Neautorizat, utilizatorul nu este admin'}, {status:401})
        }
    } 

    const projectId = params.id;
    const project = await Project.findById(projectId);

    if (!project) {
      return NextResponse.json({ message: 'Proiectul nu a fost gasit' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Eroare server: ' + error }, { status: 500 });
} }


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