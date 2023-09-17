"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const containerRef: any = useRef();

  useEffect(() => {
    containerRef.current.classList.toggle("opacity-0");
  }, []);

  return (
    <>
      <div className="w-full h-screen justify-center items-center flex ">
        <div
          className="relative opacity-0 transition-all duration-1000 ease-in"
          ref={containerRef}
        >
          <div className="bg-red-700 absolute inset-0 blur-3xl "></div>
          <div className="relative bg-stone-900  p-5 rounded-lg flex flex-row -my-10 mx-5 ">
            <div className="flex flex-col self-center">
              <p className="text-9xl">flint.</p>
              <p className="m-3">A basic chat app.</p>
            </div>
            <div className="min-h-max w-[1px] mx-10 bg-gradient-to-b from-transparent via-stone-500 to-transparent"></div>
            <div className=" flex flex-col self-center">
              <p className="mb-5 text-4xl">Login</p>
              <form
                className="mx-3 flex-1 my-auto"
                action="/api/login"
                method="POST"
              >
                <div className="flex flex-col ">
                  <p className="text-sm">Username or Email</p>
                  <input
                    type="text/email"
                    className="bg-stone-500 p-1 px-3 rounded-3xl my-3 placeholder:text-xs  text-xs w-72 h-8 outline-none"
                    name="username"
                    placeholder="Enter your username or email"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">Password</p>
                  <input
                    type="password"
                    name="password"
                    className="bg-stone-500 p-1 px-3 rounded-3xl my-3 placeholder:text-xs text-xs w-72 h-8 outline-none"
                    placeholder="Enter your password"
                  />
                </div>
                <input
                  type="submit"
                  className="bg-stone-600 px-4 py-2 mt-2 mb-5 -mx-3 rounded-2xl hover:bg-stone-400 transition-all  ease-in "
                  value="Login"
                ></input>
              </form>
              <p className="text-xs text-right link ">
                Don't have an account? <Link href="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
