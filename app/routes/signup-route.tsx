import { SignUpContainer } from '~/signup/SignUpContainer';
import type { Route } from './+types/signup-route';

// biome-ignore lint/correctness/noUnusedFunctionParameters: Might be used later
export function meta(args: Route.MetaArgs) {
  return [
    { title: 'Sign Up - Learning Platform' },
    {
      name: 'description',
      content: 'Create your Learning Platform account!',
    },
  ];
}

export default function SignUpRoute() {
  return <SignUpContainer />;
}
