'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isTokenExpired } from '@/utils/token';

export const useTokenCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('token');
      router.push('/signin');
    }
  }, []);
};
