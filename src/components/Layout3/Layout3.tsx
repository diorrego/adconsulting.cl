import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout3 = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout3;
