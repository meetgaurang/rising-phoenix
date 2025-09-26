import type { Route } from "./+types/home";
import Login from "~/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login to your account!" },
  ];
}

export default function LoginRoute() {
  return <Login onSubmit={async (data) => console.log(data)} loading={false} />;
}
