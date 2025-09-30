import { useAuth } from '~/core/AuthContext';

export function DashboardContainer() {
  const auth = useAuth();
  return <div>Welcome {auth?.user.fullName}!</div>;
}
