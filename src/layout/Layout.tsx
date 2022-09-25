import { CenteredLayout } from 'src/components/CenteredLayout';
import { Navbar } from 'src/components/Navbar';
import { Footer } from 'src/components/Footer';

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <CenteredLayout navBar={<Navbar />} centerVertically={false} footer={<Footer />}>
      {children}
    </CenteredLayout>
  );
}
