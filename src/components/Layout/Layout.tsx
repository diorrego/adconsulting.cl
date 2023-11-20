import { RefObject, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import NavBar from './NavBar';
import Footer from './Footer';

import CallToAction from '../../components/CallToAction';
import WhatsappButton from './WhatsappButton';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  CTARef?: RefObject<HTMLDivElement>;
}

const Layout = ({ children }: LayoutProps) => {
  const CTARef = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-x-hidden flex flex-col">
      <NavBar CTARef={CTARef} />
      {children}
      <div ref={CTARef}>
        <CallToAction />
      </div>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Layout;
