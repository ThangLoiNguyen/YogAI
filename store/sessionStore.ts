"use client";

import { create } from "zustand";

type LivePose = {
  name: string;
  note?: string;
  durationMin?: number;
};

type SessionState = {
  activeSessionId: string | null;
  poses: LivePose[];
  start: (sessionId: string) => void;
  addPose: (pose: LivePose) => void;
  end: () => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  activeSessionId: null,
  poses: [],
  start: (sessionId) => set({ activeSessionId: sessionId, poses: [] }),
  addPose: (pose) =>
    set((state) => ({
      poses: [...state.poses, pose],
    })),
  end: () => set({ activeSessionId: null, poses: [] }),
}));

