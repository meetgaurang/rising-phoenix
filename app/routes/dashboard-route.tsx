import type { Route } from "./+types/dashboard-route";
import { DashboardContainer } from "~/dashboard/DashboardContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome <user_name>!" },
    { name: "description", content: "Dashboard page!" },
  ];
}

export default function DashboardRoute() {
  return <DashboardContainer />;
}
