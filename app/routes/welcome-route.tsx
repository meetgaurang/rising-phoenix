import { WelcomeContainer } from '~/welcome/WelcomeContainer';
import type { Route } from './+types/welcome-route';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Learning Platform' },
    { name: 'description', content: 'Welcome to the Learning Platform!' },
  ];
}

export default function WelcomeRoute() {
  return <WelcomeContainer />;
}
