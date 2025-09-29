// routes/auth-callback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabaseClient } from "~/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase automatically sets session in localStorage after redirect
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // (Optional) upsert user into profiles table
        // supabase.from("profiles").upsert({ id: session.user.id, email: session.user.email });

        navigate("/dashboard"); // redirect to protected route
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return <p>Finishing login...</p>;
}
