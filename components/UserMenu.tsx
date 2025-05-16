'use client';

import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/actions/auth.action';

export default function UserMenu({ }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in'); // redirect after sign out
  };

  return (
    <div className="relative group cursor-pointer">
      
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-sm text-primary-100 hover:text-red-700 text-left"
        >
          Sign Out
        </button>
      
    </div>
  );
}
