"use client";
import { useAuthContext } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const { authState, setAuthState } = useAuthContext() as any;

  const router = useRouter();
  useEffect(() => {
    authState == null && router.push("/login");
  }, []);
}
