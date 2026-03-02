import { NextResponse } from "next/server";
import { callFirebaseApi } from "../../../../lib/firebase";

// Proxy sang Firebase backend: /teachers/me
export async function GET() {
  const { data, status } = await callFirebaseApi<unknown>("/teachers/me", {
    method: "GET",
  });

  return NextResponse.json(data, { status });
}

