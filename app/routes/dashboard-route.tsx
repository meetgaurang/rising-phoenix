import { DashboardPageContainer } from '~/dashboard/DashboardPageContainer';
import type { Route } from './+types/dashboard-route';

export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Dashboard page' },
  ];
}

export default function DashboardRoute() {
  return <DashboardPageContainer />;
}
