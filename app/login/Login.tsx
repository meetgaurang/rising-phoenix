import { LoginForm, type LoginFormProps } from './LoginForm';

export type LoginProps = LoginFormProps;

export function Login(props: LoginProps) {
  return <LoginForm {...props} />;
}
