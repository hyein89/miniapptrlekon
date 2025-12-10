import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ received: data });
}
