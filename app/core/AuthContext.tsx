import type { Session } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

export type SessionDetails = Pick<Session, 'access_token'> & {
  user: {
    id: string;
    name: string;
    fullName: string;
    email: string;
  };
};

export const mapSessionDetails = (session: Session): SessionDetails => ({
  access_token: session.access_token,
  user: {
    id: session.user.id,
    name: session.user.user_metadata.user_name,
    fullName: session.user.user_metadata.full_name,
    email: session.user.email || '',
  },
});

export const AuthContext = createContext<SessionDetails | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
