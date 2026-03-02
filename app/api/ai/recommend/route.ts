import { NextResponse } from "next/server";
import { callFirebaseApi } from "../../../../lib/firebase";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const { data, status } = await callFirebaseApi<unknown>("/ai/recommend", {
    method: "POST",
    body: JSON.stringify(body ?? {}),
  });

  return NextResponse.json(data, { status });
}


