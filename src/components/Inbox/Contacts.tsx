"use client";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import NewMessageModal from "./NewMessageModal";

export default function Contacts() {
  const modalRef: MutableRefObject<HTMLDialogElement | null> = useRef(null);
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log(isModalVisible);
    isModalVisible && modalRef.current?.showModal();
  }, [isModalVisible]);

  return (
    <>
      <dialog
        ref={modalRef}
        className=" relative  backdrop-blur-3xl backdrop:bg-black/50 bg-stone-950 rounded-2xl 
         text-white focus:outline-none"
      >
        <p
          className="absolute z-10 top-0 end-0 m-3 cursor-pointer "
          onClick={() => {
            modalRef.current?.close();
            setModalVisible(false);
          }}
        >
          🙅
        </p>
        <NewMessageModal />
      </dialog>
      <div className=" h-screen  bg-stone-950  w-2/6 flex flex-col ">
        <span className="flex">
          <p className="m-3 flex-1">Messages</p>

          <p
            className="my-auto mx-3 cursor-pointer"
            onClick={() => {
              isModalVisible ? setModalVisible(false) : setModalVisible(true);
            }}
          >
            📝
          </p>
        </span>
        <div className="">
          <ul>
            <li className="p-4 text-lg px-5 w-full hover:bg-stone-700 cursor-pointer flex">
              <img
                className=" w-16 h-16 rounded-full bg-pink-600"
                alt="profilepicture"
                src="/bg.png"
              ></img>
              <div className="flex-1 ml-5 my-auto">
                <span>
                  <p className="text-base">
                    <Link href="/inbox/username">dfas</Link>Username
                  </p>
                  <p className="text-xs my-2">Recent text</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
