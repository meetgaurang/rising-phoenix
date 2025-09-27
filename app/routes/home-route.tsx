import type { Route } from "./+types/home-route";
import { HomeContainer } from "~/home/HomeContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome <user_name>!" },
    { name: "description", content: "Home page!" },
  ];
}

export default function HomeRoute() {
  return <HomeContainer />;
}
