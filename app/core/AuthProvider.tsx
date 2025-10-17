import type { Session } from '@supabase/supabase-js';
import { Spinner } from 'components/ui/shadcn-io/spinner';
import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import { ScreenCenter } from '~/components/ui/ScreenCenter';
import { supabaseClient } from '~/supabase';
import {
  AuthContext,
  mapSessionDetails,
  type SessionDetails,
} from './AuthContext';

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionDetails | undefined>();
  const [loading, setLoading] = useState(true);

  const handleLogoutClick = useCallback(async () => {
    await supabaseClient.auth.signOut();
    setSession(undefined);
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    supabaseClient.auth
      .getSession()
      .then((response: { data: { session: Session | null } }) => {
        if (response.data.session) {
          setSession(
            mapSessionDetails(response.data.session, handleLogoutClick),
          );
        }
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(
      (_event, sessionDetails: Session | null) => {
        if (sessionDetails) {
          setSession(mapSessionDetails(sessionDetails, handleLogoutClick));
        } else {
          setSession(undefined);
        }
        if (_event === 'SIGNED_IN') {
          navigate('/dashboard');
        }
        setLoading(false);
      },
    );

    return () => subscription.unsubscribe();
  }, [navigate, handleLogoutClick]);

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
