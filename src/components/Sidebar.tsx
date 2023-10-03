import Link from "next/link";

export default function SideBar() {
  return (
    <>
      <div className=" h-screen  bg-stone-950 w-1/5 top-0 start-0 flex flex-col justify-between">
        <p className="font-VarelaRound m-5 text-3xl text-center shadow-red-800 shadow-2xl p-3 rounded-3xl">
          flint.
        </p>

        <div className="">
          <ul>
            <li className="py-2 rounded-xl text-lg px-5 w-3/4 mx-auto my-3 hover:bg-stone-700 cursor-pointer">
              🏡&emsp;Home
            </li>
            <Link href="/inbox">
              <li className="py-2 rounded-xl text-lg px-5 w-3/4 mx-auto my-3 hover:bg-stone-700 cursor-pointer">
                🗨&emsp;Messages
              </li>
            </Link>
            <Link href="sadf">
              <li className="py-2 rounded-xl text-lg px-5 w-3/4 mx-auto my-3 hover:bg-stone-700 cursor-pointer">
                🤦&emsp;Account
              </li>
            </Link>
          </ul>
        </div>
        <div></div>
        <div className="py-2 rounded-xl text-lg px-5 w-3/4 mx-auto my-3 hover:bg-stone-700 cursor-pointer">
          ⚙️&emsp;Settings
        </div>
      </div>
    </>
  );
}
