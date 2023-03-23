export function Form() {
  return (
    <form action="" className="bg-zinc-700 w-80 p-4 flex flex-col rounded-sm">
      <div className="rounded-md mb-5">
        <input
          type="text"
          name="title"
          className="block bg-zinc-500 w-full rounded-md border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Title"
        />
      </div>
      <textarea
        name="body"
        className="block bg-zinc-500 w-full h-28 rounded-md border-0 py-1.5 text-white ring-1 ring-inset ring-gray-300 resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Body"
      ></textarea>
    </form>
  );
}
