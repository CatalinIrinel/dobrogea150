import { connectToDatabase } from '@/lib/db';
import { Obiectiv } from '@/lib/models/obiectivModel';
import { NextResponse } from 'next/server';

export async function GET(req, context){
    const { params} = await context
    const {categorie} = await params

    try {
        
    await connectToDatabase();

    const obiective = await Obiectiv.find({categorie:categorie});
    return NextResponse.json(obiective);
    } catch (error) {
        return NextResponse.json({message:'A aparut o eroare la preluarea obiectivelor', error: error.message},{status:500})
    }
}