"use client";
import { useContext, useState, createContext } from "react";

export const AuthContext = createContext(null) as any;

export function AuthContextProvider({ children }: any) {
  const [authState, setAuthState] = useState(null);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
