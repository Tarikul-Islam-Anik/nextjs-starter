'use client';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='grid h-screen place-items-center'>
      <h1 className='text-5xl font-bold'>Next.js + Tailwind CSS</h1>
      <h2 className='text-2xl font-bold'>
        With Dark Mode {theme === 'dark' ? '🌙' : '☀️'}
      </h2>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
}
