import { Navigate } from 'react-router';
import { useAuth } from './AuthContext';

type PublicRouteProps = {
  children: React.ReactNode;
};

export function PublicRoute({ children }: PublicRouteProps) {
  const auth = useAuth();

  // If user is authenticated, redirect to dashboard
  if (auth) {
    return <Navigate to="/dashboard" replace />;
  }

  // If not authenticated, show the public page (login/signup)
  return <>{children}</>;
}
