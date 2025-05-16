import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/actions/auth.action';
import UserMenu from '@/components/UserMenu';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  if (!user) redirect('/sign-in');

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-xl font-semibold text-primary-100">PrepWise</h2>
        </Link>

        <UserMenu/>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
