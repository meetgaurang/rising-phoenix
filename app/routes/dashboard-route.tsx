import { DashboardContainer } from '~/dashboard/DashboardContainer';
import type { Route } from './+types/dashboard-route';

// biome-ignore lint/correctness/noUnusedFunctionParameters: Might be used later
export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Welcome!' },
    { name: 'description', content: 'Dashboard page' },
  ];
}

export default function DashboardRoute() {
  return <DashboardContainer />;
}
