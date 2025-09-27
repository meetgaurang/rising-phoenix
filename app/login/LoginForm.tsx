import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { loginFormSchema, type LoginFormValues } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";

export type LoginFormProps = {
  onSubmit: (data: LoginFormValues) => Promise<void>;
  onGoogleLogin: () => void;
  loading: boolean;
};

export function LoginForm({
  onGoogleLogin,
  loading,
  onSubmit,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Sign in.</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <span className="text-error text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your Password"
              {...register("password")}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="text-error text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox id="remember" {...register("remember")} />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary underline">
              Forgot your password?
            </a>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
        <div className="divider my-6 text-center">Or continue with</div>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          type="button"
          onClick={onGoogleLogin}
        >
          {/* Google SVG icon */}
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
        </Button>
      </div>
    </div>
  );
}
