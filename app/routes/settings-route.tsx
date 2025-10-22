import type { MetaFunction } from 'react-router';
import { SettingsPageContainer } from '~/settings/SettingsPageContainer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Settings' },
    {
      name: 'description',
      content: 'Configure your application settings and preferences.',
    },
    { name: 'robots', content: 'noindex, nofollow' }, // Private user data
  ];
};

export default function SettingsRoute() {
  return <SettingsPageContainer />;
}
