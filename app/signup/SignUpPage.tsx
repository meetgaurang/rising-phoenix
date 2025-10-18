import { SignUpForm, type SignUpFormProps } from './SignUpForm';

export type SignUpPageProps = SignUpFormProps;

export function SignUpPage(props: SignUpPageProps) {
  return <SignUpForm {...props} />;
}
