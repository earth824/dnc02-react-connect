import { Outlet } from 'react-router';
import Header from './Header';

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl space-y-6 px-4 py-10">
        <Outlet />
      </main>
    </>
  );
}
