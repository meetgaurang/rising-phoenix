import { useState } from 'react';
import { supabaseClient } from '~/supabase';
import { SignUp } from './SignUp';
import type { SignUpFormValues } from './signUpFormSchema';

export function SignUpContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleGoogleSignUp = async () => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleEmailSignUp = async (data: SignUpFormValues) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          full_name: `${data.firstName} ${data.lastName}`,
        },
      },
    });
    if (error) {
      console.error(error.message);
    } else {
      // Show success message or redirect
      console.log('Please check your email to confirm your account');
    }
    setLoading(false);
  };

  return (
    <SignUp
      onEmailSignUp={handleEmailSignUp}
      onGoogleSignUp={handleGoogleSignUp}
      loading={loading}
    />
  );
}
