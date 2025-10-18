import { useState } from 'react';
import { supabaseClient } from '~/supabase';
import { SignUpPage } from './SignUpPage';
import type { SignUpFormValues } from './signUpFormSchema';

export function SignUpPageContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleGoogleSignUp = async () => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setError(error.message);
    } else {
      setError(undefined);
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
      setError(error.message);
    } else {
      // Show success message or redirect
      setError(undefined);
      console.log('Please check your email to confirm your account');
    }
    setLoading(false);
  };

  return (
    <SignUpPage
      onEmailSignUp={handleEmailSignUp}
      onGoogleSignUp={handleGoogleSignUp}
      loading={loading}
    />
  );
}
