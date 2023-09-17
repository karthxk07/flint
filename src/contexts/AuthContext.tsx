"use client";
import { useContext, useState, createContext } from "react";

type authSate = {
  name: string;
  accessToken: string;
  isAuthenticated: boolean;
};

export const AuthContext = createContext(null) as any;

export function AuthContextProvider({ children }: any) {
  const [authState, setAuthState] = useState({
    name: null,
    accessToken: null,
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
