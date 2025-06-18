import jwt from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';

export function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
}

export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp < now;
  } catch (err) {
    console.error('Invalid token', err);
    return true;
  }
}

export async function isAuth(req, res, next) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('User does not exist');
  }

  const token = authHeader.slice(7); // remove 'Bearer '
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // return user object
  } catch (err) {
    throw new Error('Invalid Token');
  }
}

export async function isAdmin(req) {
  const user = await isAuth(req);

  if (!user.isAdmin) {
    throw new Error('This user is not an Admin');
  }

  return user;
}
