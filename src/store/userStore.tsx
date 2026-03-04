import type { AuthUser } from "@/api/types";
import { create } from "zustand";

interface UserState {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));