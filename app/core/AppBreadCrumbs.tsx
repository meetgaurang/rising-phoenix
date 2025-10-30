import React from 'react';
import { Link, useLocation } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';

interface AppBreadcrumbItem {
  title: string;
  href?: string;
}

export function AppBreadCrumbs() {
  const location = useLocation();

  // Generate breadcrumb items from the current path
  const generateBreadcrumbs = (): AppBreadcrumbItem[] => {
    const pathSegments = location.pathname
      .split('/')
      .filter((segment) => segment !== ''); // Remove empty segments

    if (pathSegments.length === 0) {
      return [];
    }

    const breadcrumbs: AppBreadcrumbItem[] = [];
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Capitalize the segment to create display title
      const title = segment.charAt(0).toUpperCase() + segment.slice(1);

      // The last segment is the current page (no href)
      // All previous segments are clickable links
      if (index === pathSegments.length - 1) {
        breadcrumbs.push({ title });
      } else {
        breadcrumbs.push({ title, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't render if no breadcrumbs
  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-1.5">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href || crumb.title}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem className="gap-1">
              {crumb.href ? (
                <BreadcrumbLink asChild>
                  <Link to={crumb.href}>{crumb.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
