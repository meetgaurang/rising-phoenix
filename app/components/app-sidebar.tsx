'use client';

import { LayoutDashboard } from 'lucide-react';
import type * as React from 'react';

import { NavMain } from '~/components/nav-main';
import { NavUser } from '~/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '~/components/ui/sidebar';

const navigationConfig = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: 'Profile',
          url: '/dashboard/profile',
        },
        {
          title: 'Settings',
          url: '/dashboard/settings',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationConfig.navMain} />
        {/* No need for the projects nav */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* Currently there is no need for the sidebar footer */}
      {/* <SidebarFooter>
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
