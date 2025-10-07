import { LoginForm } from './LoginForm';
import type { LoginFormValues } from './loginFormSchema';

export type LoginProps = {
  onEmailLogin: (data: LoginFormValues) => Promise<void>;
  onGoogleLogin: () => void;
  loading: boolean;
};

export function Login(props: LoginProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          onEmailLogin={props.onEmailLogin}
          onGoogleLogin={props.onGoogleLogin}
          loading={props.loading}
        />
      </div>
    </div>
  );
}
