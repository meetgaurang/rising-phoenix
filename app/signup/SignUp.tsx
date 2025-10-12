import { SignUpForm, type SignUpFormProps } from './SignUpForm';

export type SignUpProps = SignUpFormProps;

export function SignUp(props: SignUpProps) {
  return <SignUpForm {...props} />;
}
