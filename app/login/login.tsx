import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Sign in.</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your Email"
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Your Password"
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => {}}
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_40)">
              <path
                d="M47.5 24.5C47.5 22.6 47.3 20.8 47 19H24V29.5H37.4C36.7 33.1 34.1 36 30.7 37.7V44H38.2C43 40.1 47.5 33.2 47.5 24.5Z"
                fill="#4285F4"
              />
              <path
                d="M24 48C30.6 48 36.2 45.9 40.2 42.2L32.7 36.7C30.7 37.8 28.4 38.5 26 38.5C19.7 38.5 14.2 34.1 12.3 28.5H4.5V35.1C8.5 42.1 15.7 48 24 48Z"
                fill="#34A853"
              />
              <path
                d="M12.3 28.5C11.7 26.9 11.4 25.1 11.4 23.2C11.4 21.3 11.7 19.5 12.3 17.9V11.3H4.5C2.6 15 1.5 19 1.5 23.2C1.5 27.4 2.6 31.4 4.5 35.1L12.3 28.5Z"
                fill="#FBBC05"
              />
              <path
                d="M24 9.5C27 9.5 29.7 10.5 31.8 12.5L38.4 6C34.2 2.3 28.6 0 24 0C15.7 0 8.5 5.9 4.5 11.3L12.3 17.9C14.2 12.3 19.7 9.5 24 9.5Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Log in with Google
        </button>
      </div>
    </div>
  );
}
