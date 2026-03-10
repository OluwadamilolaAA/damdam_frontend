import type { AuthUser } from "@/api/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthBootstrapped: boolean;
  setUser: (user: AuthUser | null) => void;
  setAuth: (user: AuthUser, accessToken: string) => void;
  clearAuth: () => void;
  setAuthBootstrapped: (isBootstrapped: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthBootstrapped: false,
      setUser: (user) => set({ user }),
      setAuth: (user, accessToken) => set({ user, accessToken }),
      clearAuth: () => set({ user: null, accessToken: null }),
      setAuthBootstrapped: (isBootstrapped) =>
        set({ isAuthBootstrapped: isBootstrapped }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
      }),
    }
  )
);
