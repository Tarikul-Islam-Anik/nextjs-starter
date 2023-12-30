export { default } from 'next-auth/middleware';

// Protect paths here
export const config = { matcher: ['/protected'] };
