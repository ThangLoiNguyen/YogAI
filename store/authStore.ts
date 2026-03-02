"use client";

import { create } from "zustand";

type Role = "student" | "teacher" | null;

type AuthState = {
  userId: string | null;
  role: Role;
  setUser: (userId: string, role: Exclude<Role, null>) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  role: null,
  setUser: (userId, role) => set({ userId, role }),
  clear: () => set({ userId: null, role: null }),
}));

