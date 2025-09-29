import { LoginForm } from "./LoginForm";
import type { LoginFormValues } from "./loginFormSchema";

export type LoginProps = {
  onEmailLogin: (data: LoginFormValues) => Promise<void>;
  onGoogleLogin: () => void;
  loading: boolean;
};

export function Login(props: LoginProps) {
  return (
    <LoginForm
      onEmailLogin={props.onEmailLogin}
      onGoogleLogin={props.onGoogleLogin}
      loading={props.loading}
    />
  );
}
