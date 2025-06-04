import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-storm-900 via-storm-800 to-storm-900 text-white">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;