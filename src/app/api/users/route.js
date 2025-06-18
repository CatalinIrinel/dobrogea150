import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/db';
import { User } from '@/lib/models/userModel';
import { generateToken } from '@/lib/utils';

export  async function POST(req) {
    await connectToDatabase();

    const { email, password } = await req.json();
  
    const user = await User.findOne({ email });
  
    if (user && bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({
        _id: user._id,
        nume: user.nume,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
  
    return NextResponse.json({ message: 'Invalid user or password' }, { status: 401 });
    
}