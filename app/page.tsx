"use client";
import SideBar from "@/components/Sidebar";
import { useAuthContext } from "@/src/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomeView() {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div className=" ml-auto"></div>
      </div>
    </>
  );
}

export default function Home() {
  const { authState, setAuthState } = useAuthContext() as any;
  const router = useRouter();

  useEffect(() => {
    // authState.isAuthenticated === true && router.push("/login");
  }, []);

  return (
    <>
      <HomeView />
    </>
  );
}
