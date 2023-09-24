export default function NewMessageModal() {
  return (
    <>
      <div className="h-96 w-96 relative flex flex-col">
        <div className="sticky top-0 start-0 m-4 ml-8">
          <form className="bg-stone-700 rounded-2xl max-w-max  px-2">
            <input
              type="text"
              className=" bg-transparent focus:outline-none px-2 text-sm m-auto"
              placeholder="Search username"
            ></input>
            <input
              type="submit"
              value="🔍"
              className="cursor-pointer m-1"
            ></input>
          </form>
        </div>
        <div className="flex-1 mt-auto">
          <ul>
            <li className="p-2 text-lg px-3 w-full hover:bg-stone-700 cursor-pointer flex">
              <img
                className=" w-10 h-10 rounded-full bg-pink-600"
                alt="profilepicture"
                src="/bg.png"
              ></img>
              <div className="flex-1 ml-3 my-auto">
                <span>
                  <p className="text-sm">Username</p>
                  <p className="text-xs my-2">Name</p>
                </span>
              </div>
            </li>
            <li className="p-2 text-lg px-3 w-full hover:bg-stone-700 cursor-pointer flex">
              <img
                className=" w-10 h-10 rounded-full bg-pink-600"
                alt="profilepicture"
                src="/bg.png"
              ></img>
              <div className="flex-1 ml-3 my-auto">
                <span>
                  <p className="text-sm">Username</p>
                  <p className="text-xs my-2">Name</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
