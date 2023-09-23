"use client";
import SideBar from "@/components/Sidebar";
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
  return (
    <>
      <HomeView />
    </>
  );
}
