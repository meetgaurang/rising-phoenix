import { SignUpForm } from './SignUpForm';
import type { SignUpFormValues } from './signUpFormSchema';

export type SignUpProps = {
  onEmailSignUp: (data: SignUpFormValues) => Promise<void>;
  onGoogleSignUp: () => void;
  loading: boolean;
};

export function SignUp(props: SignUpProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm
          onEmailSignUp={props.onEmailSignUp}
          onGoogleSignUp={props.onGoogleSignUp}
          loading={props.loading}
        />
      </div>
    </div>
  );
}
