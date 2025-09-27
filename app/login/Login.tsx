import { LoginForm } from "./LoginForm";
import type { LoginFormValues } from "./loginFormSchema";

export type LoginProps = {
  onSubmit: (data: LoginFormValues) => Promise<void>;
  onGoogleLogin: () => void;
  loading: boolean;
};

export function Login(props: LoginProps) {
  return (
    <LoginForm
      onSubmit={props.onSubmit}
      onGoogleLogin={props.onGoogleLogin}
      loading={props.loading}
    />
  );
}
