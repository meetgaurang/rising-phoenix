import { LoginContainer } from "~/login/LoginContainer";
import type { Route } from "./+types/login-route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login to your account!" },
  ];
}

export default function LoginRoute() {
  return <LoginContainer />;
}
