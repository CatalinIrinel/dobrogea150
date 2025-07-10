import { connectToDatabase } from '@/lib/db';
import { Project } from '@/lib/models/projectModel';
import { isAuth, isAdmin } from '@/lib/utils';
import { NextResponse } from 'next/server';

const PAGE_SIZE = 6;

export async function GET(req) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const pageSize = parseInt(searchParams.get('pageSize')) || PAGE_SIZE;

  const projects = await Project.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const countProjects = await Project.countDocuments();

  return NextResponse.json({
    projects,
    countProjects,
    page,
    pages: Math.ceil(countProjects / pageSize),
  });
}

export async function POST(req) {
  await connectToDatabase();
  await isAuth(req);
  await isAdmin(req);

  const {
    title,
    slug,
    description,
    image,
    galleryImages,
    dateStart,
    dateEnd,
    state,
  } = await req.json();

  const newProject = new Project({
    title: title,
    description: description,
    link: `/proiecte/${slug}`,
    slug:slug,
    image: image,
    dateStart: dateStart,
    dateEnd: dateEnd,
    state: state,
    galleryImages: galleryImages,
  });

  const savedProject = await newProject.save();

  return NextResponse.json({
    message: 'Project Created',
    project: savedProject,
  });
}
