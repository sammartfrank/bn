import { AnchorTwo } from '@icon-park/react';
import { url } from 'inspector';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { CenteredLayout } from './CenteredLayout';

const Loader = () => {
  return (
    <div className="absolute flex flex-row gap-2 items-center right-10 bottom-24">
      <p className="text-blue-500 border-r-[0.1rem] border-blue-500 px-2 align-middle animate-pulse">
        Loading
      </p>
      <div className="animate-spin">
        <FaSpinner size={30} className="text-blue-500" />
      </div>
    </div>
  );
};

export const Hero = () => {
  const [loading, setLoading] = useState(true);

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

    setTimeout(() => {
      const title = document.querySelector('#title') as HTMLElement;
      const subtitle = document.querySelector('#subtitle') as HTMLElement;
      const anchor = document.querySelector('#arrow-scroll') as HTMLElement;
      title.style.transition = 'all 2s ease-in-out';
      title.style.color = 'white';
      subtitle.style.transition = 'all 2s ease-in-out';
      subtitle.style.color = 'white';
      anchor.style.transition = 'all 2s ease-in-out';
      anchor.style.color = 'white';
      setLoading(false);
    }, 1500);
    return () => {
      removeEventListener('scroll', measureScroll);
    };
  }, []);

  const handleOnClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`relative w-full h-screen`} id="hero">
      <Image src="/assets/sea.jpg" className="z-[-1]" layout="fill" alt="Sea" loading="lazy" />
      <CenteredLayout centerHorizontally={true} centerVertically={true}>
        <div className="flex flex-col gap-5 items-center">
          <h1
            id="title"
            className="bg-clip-text text-7xl md:text-9xl font-extrabold text-transparent bg-gradient-to-r from-purple-600 via-orange-400 to-teal-300 hover:cursor-pointer bg-white"
          >
            Blue Nautilus
          </h1>
          <h2 id="subtitle" className="text-xl font-semibold text-blue-500">
            Your Captian Nemo for digital identity.
          </h2>
          <button
            onClick={handleOnClick}
            className="rounded-lg p-5 w-[200px] mt-8 text-white bg-blue-500 hover:bg-blue-900"
          >
            REACH OUT
          </button>
        </div>
        {loading && <Loader />}
        <div className="absolute bottom-24 animate-bounce">
          <AnchorTwo size={25} className="text-blue-500" strokeWidth={6} id="arrow-scroll" />
        </div>
      </CenteredLayout>
    </div>
  );
};
