import type { Session } from "@supabase/supabase-js";
import { Spinner } from "components/ui/shadcn-io/spinner";
import { useEffect, useState, type PropsWithChildren } from "react";
import { supabaseClient } from "~/supabase";
import {
  AuthContext,
  mapSessionDetails,
  type SessionDetails,
} from "./AuthContext";
import { ScreenCenter } from "~/components/ui/ScreenCenter";

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<SessionDetails | undefined>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabaseClient.auth
      .getSession()
      .then((response: { data: { session: Session | null } }) => {
        if (response.data.session) {
          setSession(mapSessionDetails(response.data.session));
        }
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(
      (_event, sessionDetails: Session | null) => {
        if (sessionDetails) {
          setSession(mapSessionDetails(sessionDetails));
        } else {
          setSession(undefined);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <ScreenCenter>
        <Spinner />
      </ScreenCenter>
    );
  }

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
