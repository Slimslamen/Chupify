import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Example: Check for a specific header or cookie (e.g., an authentication token)
  const token = req.cookies.get('spotify_token');

  if (!token) {
    // Redirect to login page if no token is present
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if(req.url === '/api/auth/callback') {
    return NextResponse.json({Token : token}, { status: 200 });
  }
}

// Optional: You can specify which routes the middleware should apply to
export const config = {
  matcher: ['/api/auth/callback'], // Adjust the path as needed
};