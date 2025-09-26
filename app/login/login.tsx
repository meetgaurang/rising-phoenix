import { LoginForm } from "~/components/login-form";
import { supabaseClient } from "../supabase";
import { useEffect, useState } from "react";

export default function Login() {
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

  const handleGoogleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Sign in error..");
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <LoginForm handleGoogleLogin={handleGoogleLogin} />;
  } else {
    return <div>Logged in!</div>;
  }
}
