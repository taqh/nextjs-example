import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default SiteLayout;
