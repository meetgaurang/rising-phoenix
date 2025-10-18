import { LoginForm, type LoginFormProps } from './LoginForm';

export type LoginPageProps = LoginFormProps;

export function LoginPage(props: LoginPageProps) {
  return <LoginForm {...props} />;
}
