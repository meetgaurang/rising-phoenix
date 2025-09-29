import { useAuth } from "~/core/AuthProvider";

export function DashboardContainer() {
  const auth = useAuth();
  return <div>Welcome {auth?.user.fullName}!</div>;
}
