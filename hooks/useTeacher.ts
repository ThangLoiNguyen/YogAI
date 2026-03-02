"use client";

import useSWR from "swr";

type TeacherSummary = {
  id: string;
  name: string;
  specialties: string[];
};

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export function useTeacherSummary() {
  const { data, error, isLoading } = useSWR<TeacherSummary>(
    "/api/teachers/me",
    fetcher,
  );

  return {
    teacher: data,
    isLoading,
    isError: !!error,
  };
}

