import { Outlet } from 'react-router';
import { ProtectedRoute } from '~/core/ProtectedRoute';

export default function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}
