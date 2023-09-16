const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">

      <h1 className="text-2xl font-semibold mb-4 bg-white">Enter your details</h1>

      <form>
        <div className="mb-4 bg-white">
          <label htmlFor="name" className="block bg-white text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4 bg-white">
          <label htmlFor="email" className="block bg-white text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login;