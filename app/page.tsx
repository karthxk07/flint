"use client";
import { useAuthContext } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomeView() {
  return <>Home</>;
}

export default function Home() {
  const { authState, setAuthState } = useAuthContext() as any;
  const router = useRouter();

  useEffect(() => {
    authState.isAuthenticated === false && router.push("/login");
  }, []);

  return (
    <>
      <HomeView />
    </>
  );
}
