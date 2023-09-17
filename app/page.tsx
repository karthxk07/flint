"use client";
import { useAuthContext } from "@/src/contexts/AuthContext";
import { isAuthenticated } from "@/src/api/isAuthenticated";
import LoginPageView from "@/views/LoginPageView";
import { useEffect } from "react";

export default function Home() {
  const { authState, setAuthState } = useAuthContext() as any;

  return <>{authState == null ? <LoginPageView /> : <p>Home</p>}</>;
}
