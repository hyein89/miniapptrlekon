import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Telegram API OK" });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ received: data });
}
