import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold">Sign in.</h2>
        <form className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email address</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Your Password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="label cursor-pointer gap-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="checkbox checkbox-primary"
              />
              <span className="label-text">Remember me</span>
            </label>
            <a href="#" className="link link-primary text-sm">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </form>
        <div className="divider my-6">Or continue with</div>
        <button
          type="button"
          className="btn btn-outline w-full flex items-center justify-center gap-2"
          onClick={() => {}}
        >
          <svg
            className="w-5 h-5"
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
