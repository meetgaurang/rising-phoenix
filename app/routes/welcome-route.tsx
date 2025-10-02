import { WelcomeContainer } from '~/welcome/WelcomeContainer';
import type { Route } from './+types/welcome-route';

// biome-ignore lint/correctness/noUnusedFunctionParameters: Might be used later
export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Learning Platform' },
    { name: 'description', content: 'Welcome to the Learning Platform!' },
  ];
}

export default function WelcomeRoute() {
  return <WelcomeContainer />;
}
