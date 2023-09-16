const TryNow = () => {

  return (
    <div className="w-3/5 my-20 mx-auto p-4 bg-white shadow-md rounded-md">

      <div className="h-40 overflow-y-auto bg-white text-center">
        The processed audio will appear here

        <audio className="my-10 w-2/3 m-auto" controls />

      </div>

      <div className="mt-2 flex">

        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
          placeholder="Type text to be converted..."
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md"
        >
          Send
        </button>

      </div>

    </div>

  );

}

export default TryNow;