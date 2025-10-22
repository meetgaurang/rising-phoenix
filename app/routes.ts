import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/welcome-route.tsx'),

  // Authentication related routes under a layout
  layout('./routes/auth-layout.tsx', [
    route('login', './routes/login-route.tsx'),
    route('signup', './routes/signup-route.tsx'),
  ]),
  // Protected routes under a layout
  layout('./routes/protected-layout.tsx', [
    // Dashboard routes under DashboardLayout
    layout('./routes/dashboard-layout.tsx', [
      route('dashboard', './routes/dashboard-route.tsx'),
      route('dashboard/profile', './routes/profile-route.tsx'),
      route('dashboard/settings', './routes/settings-route.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
