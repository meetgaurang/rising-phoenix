import { Link, Outlet } from 'react-router';

import { PublicRoute } from '~/core/PublicRoute';

export default function AuthLayout() {
  return (
    <PublicRoute>
      <div className="flex flex-col min-h-screen">
        <header className="sticky w-full top-0 bg-primary p-3 text-center">
          <Link
            to="/"
            className="text-xl font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Learning Platform
          </Link>
        </header>
        <main className="flex-1 p-6">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="w-full max-w-sm mt-4">
              <Outlet />
            </div>
          </div>
        </main>
        <footer className="mt-auto text-center p-2 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Learning Platform. All rights
            reserved.
          </p>
        </footer>
      </div>
    </PublicRoute>
  );
}
