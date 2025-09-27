import { useEffect, useState } from "react";
import { supabaseClient } from "~/supabase";
import { Login } from "./Loginn";
import type { LoginFormValues } from "./loginFormSchema";

export function LoginContainer() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error, data } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      alert(error.message);
    }
    console.log(data);
    setLoading(false);
  };

  const handleSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <Login
      onSubmit={handleSubmit}
      onGoogleLogin={handleGoogleLogin}
      loading={loading}
    />
  );
}
