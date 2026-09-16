import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const textParam = searchParams.get('text');
  const defaultText =
    'Hello Santhosh, I would like to make an enquiry regarding your Business & Data Analytics services.';
  const message = textParam || defaultText;

  const targetUrl = `https://wa.me/918270407190?text=${encodeURIComponent(message)}`;

  return NextResponse.redirect(targetUrl, 307);
}
