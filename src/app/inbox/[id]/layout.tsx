export default function UserInboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative w-full h-screen rounded-r-2xl overflow-clip  flex flex-col">
        <div className="flex flex-row border-b-[1px] border-stone-600  p-3">
          <img
            className=" w-12 h-12 rounded-full bg-pink-600"
            alt="profilepicture"
            src="/bg.png"
          ></img>
          <p className="text-base my-auto mx-3">Username</p>
          <div className="flex-1"></div>
          <p className="text-lg cursor-pointer my-auto mx-3">ℹ️</p>
        </div>
        <div className="flex-1 overflow-y-scroll m-2">
          <ul>
            <li className="justify-end flex m-1">
              <span className="p-2 outline outline-1 outline-stone-600 rounded-3xl ">
                Example text{" "}
              </span>
            </li>

            <li className="justify-start flex m-1">
              <span className="p-2 outline outline-1 outline-stone-600 rounded-3xl ">
                Example text{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className=" rounded-3xl outline outline-1 outline-stone-600 m-3 overflow-clip">
          <form className="flex flex-row ">
            <input
              type="text"
              className="flex-1 p-2 px-3 bg-transparent focus:outline-none"
            ></input>
            <input type="submit" value="Send" className="mr-3"></input>
          </form>
        </div>
      </div>
    </>
  );
}
