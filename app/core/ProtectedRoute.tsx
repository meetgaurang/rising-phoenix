// components/ProtectedRoute.tsx

import { Navigate } from 'react-router';
import { useAuth } from './AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (!auth?.user) {
    // 🚪 Not logged in → send to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated → show the protected page
  return <>{children}</>;
}
