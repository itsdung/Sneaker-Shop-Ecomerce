import { NavbarLayout } from '@/layouts/public/navbar/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Nike Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavbarLayout />
      <div>{children}</div>
    </main>
  );
}