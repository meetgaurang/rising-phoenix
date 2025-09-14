import React from "react";
import GoogleLogoSVG from "./google-logo-svg";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-xl shadow-xl">
        <div className="flex flex-col gap-6">
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
          <div className="divider m-0">Or continue with</div>
          <button
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2"
            onClick={() => {}}
          >
            <GoogleLogoSVG />
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
