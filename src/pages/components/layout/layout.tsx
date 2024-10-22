import { ReactNode } from 'react';
import { Navbar } from './header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <div className="mx-auto px-4 py-6 sm:px-6 lg:px-24">
          {children}
        </div>
      </main>
    </div>
  );
};
