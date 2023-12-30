'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='grid h-screen place-items-center'>
      <h1 className='text-5xl font-bold'>
        Next.js + Tailwind CSS + NextAuth.js + Prisma
      </h1>
      <h2 className='text-2xl font-bold'>
        With Dark Mode {theme === 'dark' ? '🌙' : '☀️'}
      </h2>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
      <Link href='/api/auth/signin'>Sign In</Link>
    </div>
  );
}
