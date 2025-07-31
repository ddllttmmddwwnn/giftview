import { NextResponse } from 'next/server';
import giftcards from '@/data/giftcards.json';

export async function GET() {
  return NextResponse.json(giftcards);
}