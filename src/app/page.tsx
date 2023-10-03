"use client";
import SideBar from "@/src/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div className=" ml-auto"></div>
      </div>
    </>
  );
}
