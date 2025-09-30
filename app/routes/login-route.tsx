import { LoginContainer } from '~/login/LoginContainer';
import type { Route } from './+types/login-route';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Learning Platform' },
    {
      name: 'description',
      content: 'Login to your Learning Platform account!',
    },
  ];
}

export default function LoginRoute() {
  return <LoginContainer />;
}
