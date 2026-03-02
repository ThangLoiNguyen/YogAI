const FIREBASE_BACKEND_URL = process.env.FIREBASE_BACKEND_URL;

if (!FIREBASE_BACKEND_URL) {
  // Trong môi trường dev, bạn cần set FIREBASE_BACKEND_URL
  // trỏ tới Firebase Function / API Gateway của bạn.
  // Ví dụ: https://us-central1-your-project.cloudfunctions.net/api
  // Ở đây chỉ là cảnh báo, không throw để không chặn build.
  console.warn("FIREBASE_BACKEND_URL is not set");
}

export async function callFirebaseApi<T>(
  path: string,
  options?: RequestInit,
): Promise<{ data: T | null; status: number }> {
  if (!FIREBASE_BACKEND_URL) {
    return { data: null, status: 500 };
  }

  const url = `${FIREBASE_BACKEND_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  const data = (await res.json().catch(() => null)) as T | null;
  return { data, status: res.status };
}

