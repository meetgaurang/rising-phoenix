import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabaseClient } from '~/supabase';
import { Login } from './Login';
import type { LoginFormValues } from './loginFormSchema';

export function LoginContainer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error, data } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error(error.message);
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
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Login
      onEmailLogin={handleEmailLogin}
      onGoogleLogin={handleGoogleLogin}
      loading={loading}
    />
  );
}
