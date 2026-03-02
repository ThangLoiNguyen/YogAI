"use client";

import useSWR from "swr";

type StudentSummary = {
  id: string;
  name: string;
  city?: string;
};

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export function useStudentSummary() {
  const { data, error, isLoading } = useSWR<StudentSummary>(
    "/api/students/me",
    fetcher,
  );

  return {
    student: data,
    isLoading,
    isError: !!error,
  };
}

