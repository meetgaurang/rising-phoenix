import { DashboardContainer } from '~/dashboard/DashboardContainer';
import type { Route } from './+types/dashboard-route';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome!' },
    { name: 'description', content: 'Dashboard page' },
  ];
}

export default function DashboardRoute() {
  return <DashboardContainer />;
}
