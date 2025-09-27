import type { Route } from "./+types/welcome-route";
import { WelcomeContainer } from "~/welcome/WelcomeContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Learning Platform" },
    { name: "description", content: "Welcome to the Learning Platform!" },
  ];
}

export default function WelcomeRoute() {
  return <WelcomeContainer />;
}
