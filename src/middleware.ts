import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/docs') {
    return NextResponse.redirect('http://docs.neusym.com/');
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/docs',
}; 