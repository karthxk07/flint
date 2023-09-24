export default function Inbox() {
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="relative ">
          <span className="flex flex-col items-center">
            <p className="text-6xl aspect-square outline-2 outline outline-stone-600 hover:bg-stone-600 cursor-default p-3 pt-5 m-2 rounded-full ">
              👁️‍🗨️
            </p>
            <p className="text-4xl m-3 mb-1">Messages</p>
            <p className="text-sm">Send messages to a friend or a group</p>
          </span>
        </div>
      </div>
    </>
  );
}
