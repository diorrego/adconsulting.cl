import { RefObject, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  CTARef?: RefObject<HTMLDivElement>;
}

const Layout = ({ children, CTARef }: LayoutProps) => {
  const [CTA, setCTA] = useState<RefObject<HTMLDivElement> | undefined>(
    CTARef || undefined
  );
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/') {
      setCTA(undefined);
    }
  }, [router]);
  return (
    <div className="overflow-x-hidden">
      <NavBar CTARef={CTA} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
