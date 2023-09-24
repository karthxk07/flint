export default function UserInbox({ params }: { params: { id: String } }) {
  return (
    <>
      <ul>
        <li className="justify-end flex m-1">
          <span className="p-2 outline outline-1 outline-stone-600 rounded-3xl ">
            {params.id}
          </span>
        </li>

        <li className="justify-start flex m-1">
          <span className="p-2 outline outline-1 outline-stone-600 rounded-3xl ">
            Example text{" "}
          </span>
        </li>
      </ul>
    </>
  );
}
