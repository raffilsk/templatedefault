import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
