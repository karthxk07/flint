"use client";
import { useAuthContext } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";
// import LoginPageView from "@/views/LoginPageView";

export default function Home() {
  const { authState, setAuthState } = useAuthContext() as any;

  const router = useRouter() as any;

  return <>{authState == null ? <>{router.push("/login")}</> : <p>Home</p>}</>;
}
