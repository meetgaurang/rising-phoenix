import { useState } from 'react';
import { supabaseClient } from '~/supabase';
import { LoginPage } from './LoginPage';
import type { LoginFormValues } from './loginFormSchema';

export function LoginPageContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleGoogleLogin = async () => {
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

  const handleEmailLogin = async (data: LoginFormValues) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setError(error.message);
    } else {
      setError(undefined);
    }
    setLoading(false);
  };

  return (
    <LoginPage
      onEmailLogin={handleEmailLogin}
      onGoogleLogin={handleGoogleLogin}
      loading={loading}
      error={error}
    />
  );
}
