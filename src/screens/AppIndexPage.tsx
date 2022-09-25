import { CenteredLayout } from 'src/components/CenteredLayout';
import { ContactForm } from 'src/components/ContactForm';
import { Hero } from 'src/components/Hero';
import { Intro } from 'src/components/Intro';
import { Summary } from 'src/components/Summary';
import { Goals } from 'src/components/Goals';
import { Waves } from 'src/components/Waves';

export const AppIndexPage = () => {
  return (
    // <CenteredLayout className="relative background-animate bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 backdrop-blur-xl ">
    <CenteredLayout className="relative  ">
      <Hero />
      <Goals />
      <Intro />
      <Summary />
      <ContactForm />
      {/* <div className="h-screen w-full"></div> */}
      <Waves />
    </CenteredLayout>
  );
};
