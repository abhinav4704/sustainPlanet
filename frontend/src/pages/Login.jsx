import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B1A17] text-[#e0e0d1] px-4">
      <div className="backdrop-blur-md bg-[#2a2a2acc] border border-[#3a3a3a] p-8 rounded-3xl shadow-2xl w-full max-w-md transition-all duration-300 hover:shadow-green-500/20">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-400 tracking-wider">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-[#c2c2c2] mb-6">
          Please log in to continue your sustainable journey 🌱
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-[#1B1A17] border border-[#444] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-[#1B1A17] border border-[#444] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-xl shadow-lg transition hover:shadow-green-600/30"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-[#aaa]">
          Don’t have an account?{' '}
          <a href="#" className="text-green-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
