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
            <Link href="/">
              <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
                🏡
              </li>
            </Link>
            <Link href="/inbox">
              <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
                🗨
              </li>
            </Link>
            <Link href="/kals">
              <li className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
                🤦
              </li>
            </Link>
          </ul>
        </div>
        <div></div>
        <Link href="/settings">
          <div className="p-3 text-lg text-center rounded-lg m-1 hover:bg-stone-700 hover:scale-105 transition-all duration-100 ease-in cursor-pointer">
            ⚙️
          </div>
        </Link>
      </div>
    </>
  );
}
