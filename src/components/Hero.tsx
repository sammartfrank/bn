import { AnchorTwo } from '@icon-park/react';
import { useEffect } from 'react';
import { CenteredLayout } from './CenteredLayout';

export const Hero = () => {
  useEffect(() => {
    const measureScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 100) {
        document.querySelector('#arrow-scroll')?.classList.add('hidden');
      } else {
        document.querySelector('#arrow-scroll')?.classList.remove('hidden');
      }
    };
    addEventListener('scroll', measureScroll);
    return () => {
      removeEventListener('scroll', measureScroll);
    };
  }, []);

  const handleOnClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-screen" id="hero">
      <CenteredLayout centerHorizontally={true} centerVertically={true}>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="bg-clip-text text-9xl font-extrabold text-transparent bg-gradient-to-r from-purple-600 via-orange-400 to-teal-300 hover:cursor-pointer bg-white">
            Blue Nautilus
          </h1>
          <h2 className="text-2xl font-semibold text-blue-500">
            Your Captian Nemo for digital identity.
          </h2>
          <button
            onClick={handleOnClick}
            className="rounded-lg p-5 w-[200px] mt-8 text-white bg-blue-500 hover:bg-blue-900"
          >
            REACH OUT
          </button>
        </div>
        <div className="absolute bottom-24 animate-bounce" id="arrow-scroll">
          <AnchorTwo size={25} className="text-blue-500" strokeWidth={6} />
        </div>
      </CenteredLayout>
    </div>
  );
};
