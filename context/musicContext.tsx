import { useRouter } from "expo-router";

import React, { createContext, useContext } from "react";

type MusicContextType = {};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <MusicContext.Provider value={{}}>{children}</MusicContext.Provider>
  );
}

export function useMusicCreation() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusicCreation must be used within a MusicProvider");
  }
  return context;
}
