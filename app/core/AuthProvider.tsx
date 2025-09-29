import type { Session } from "@supabase/supabase-js";
import { Spinner } from "components/ui/shadcn-io/spinner";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { supabaseClient } from "~/supabase";

export type SessionDetails = Pick<Session, "access_token"> & {
  user: {
    id: string;
    name: string;
    fullName: string;
    email: string;
  };
};

const mapSessionDetails = (session: Session): SessionDetails => ({
  access_token: session.access_token,
  user: {
    id: session.user.id,
    name: session.user.user_metadata.user_name,
    fullName: session.user.user_metadata.full_name,
    email: session.user.email || "",
  },
});

const AuthContext = createContext<SessionDetails | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<SessionDetails | undefined>(null);

  useEffect(() => {
    supabaseClient.auth
      .getSession()
      .then((response: { data: { session: Session | null } }) => {
        if (response.data.session) {
          setSession(mapSessionDetails(response.data.session));
        }
      });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(
      (_event, sessionDetails: Session | null) => {
        if (sessionDetails) {
          setSession(mapSessionDetails(sessionDetails));
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
