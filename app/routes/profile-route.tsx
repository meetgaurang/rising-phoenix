import type { MetaFunction } from 'react-router';
import { ProfilePageContainer } from '~/profile/ProfilePageContainer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Profile' },
    {
      name: 'description',
      content: 'Manage your profile settings and personal information.',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Private user data
  ];
};

export default function ProfileRoute() {
  return <ProfilePageContainer />;
}
