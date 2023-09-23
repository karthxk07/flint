import Link from "next/link";

export default function CompactSideBar() {
  return (
    <>
      <div className=" h-screen  bg-stone-900 w-14  flex flex-col justify-between">
        <p className="font-VarelaRound m-5 text-3xl text-center">
          <Link href="/">f.</Link>
        </p>

        <div className="">
          <ul>
            <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
              <Link href="/">🏡</Link>
            </li>
            <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
              <Link href="/inbox">🗨</Link>
            </li>
            <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
              <Link href="/account">🤦</Link>
            </li>
          </ul>
        </div>
        <div></div>
        <div className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
          <Link href="/settings">⚙️</Link>
        </div>
      </div>
    </>
  );
}
