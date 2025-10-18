import { LoginPageContainer } from '~/login/LoginPageContainer';
import type { Route } from './+types/login-route';

// biome-ignore lint/correctness/noUnusedFunctionParameters: Might be used later
export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Learning Platform' },
    {
      name: 'description',
      content: 'Login to your Learning Platform account!',
    },
  ];
}

export default function LoginRoute() {
  return <LoginPageContainer />;
}
