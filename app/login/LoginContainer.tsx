import { useEffect, useState } from "react";
import { supabaseClient } from "~/supabase";
import { type LoginFormValues } from "./loginFormSchema";
import { useNavigate } from "react-router";
import { Login } from "./Login";

export function LoginContainer() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/home"); // Navigate to home when session exists
      }
    });
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate("/home"); // Navigate to home on successful auth
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error, data } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleSubmit = async (data: LoginFormValues) => {
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
      onSubmit={handleSubmit}
      onGoogleLogin={handleGoogleLogin}
      loading={loading}
    />
  );
}
