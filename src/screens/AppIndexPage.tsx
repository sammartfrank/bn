import { CenteredLayout } from 'src/components/CenteredLayout';
import { ContactForm } from 'src/components/ContactForm';
import { Hero } from 'src/components/Hero';
import { Intro } from 'src/components/Intro';
import { Product } from 'src/components/Product';
import { Goals } from 'src/components/Goals';
import { Waves } from 'src/components/Waves';

export const AppIndexPage = () => {
  return (
    <CenteredLayout className="relative  ">
      <Hero />
      <Goals />
      <Intro />
      <Product />
      <ContactForm />
      <Waves />
    </CenteredLayout>
  );
};
