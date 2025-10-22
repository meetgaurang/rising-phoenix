import { DashboardPageContainer } from '~/dashboard/DashboardPageContainer';

export function meta() {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Dashboard page' },
  ];
}

export default function DashboardRoute() {
  return <DashboardPageContainer />;
}
