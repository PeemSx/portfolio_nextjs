import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const router = useRouter();

  const handleLogout = async () => {
    console.log('here logout');
    await signOut();
    // Optionally, you can perform additional actions after sign-out.
    // For example, redirect the user to the login page.
    router.replace("/");
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;
