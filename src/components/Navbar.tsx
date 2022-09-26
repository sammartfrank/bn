import { Crab } from '@icon-park/react';
import Link from 'next/link';
import cntl from 'cntl';
import { useDevice } from 'src/hooks';
import { BurgerButton } from './BurguerButton';

const links = [
  {
    id: 1,
    name: 'Goals',
    slug: '#goals'
  },
  {
    id: 2,
    name: 'Team',
    slug: '#team'
  },
  {
    id: 3,
    name: 'Product',
    slug: '#product'
  },
  {
    id: 4,
    name: 'Contact',
    slug: '#contact'
  }
];

const listWrapperCN = (isNarrowDevice: boolean) => cntl`
  flex 
  flex-row
  gap-12
  justify-center
  max-w-lg
  w-full
`;

const LinkList = () => {
  const { device } = useDevice();
  const isNarrowDevice = device === 'MOBILE' || device === 'TABLET';
  return (
    <div className={listWrapperCN(isNarrowDevice)}>
      {links?.map((link) => {
        return (
          <div key={link.id} className="text-blue-600 text-xl">
            <Link href={link.slug}>{link.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

const navbarWrapperCN = (isNarrowDevice: boolean) => cntl`
  container
  flex
  flex-row
  w-full
  items-center
  justify-center
  md:justify-between 
  my-5
`;

export const Navbar = () => {
  const { device } = useDevice();
  const isNarrowDevice = device === 'MOBILE' || device === 'TABLET';

  const handleOnClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={navbarWrapperCN(isNarrowDevice)}>
      {!isNarrowDevice && (
        <div className="flex flex-row items-center gap-2">
          <Crab size={25} className="text-blue-500 cursor-pointer" aria-label="Blue Nautilus" />
          <p className="font-bold text-blue-500 text-2xl">Blue Nautilus</p>
        </div>
      )}
      {isNarrowDevice && <BurgerButton openMobileMenuHandler={() => {}} />}
      {!isNarrowDevice && <LinkList />}
      {!isNarrowDevice && (
        <div className="flex">
          <button
            onClick={handleOnClick}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 hover:text-white"
          >
            Lets talk!
          </button>
        </div>
      )}
    </div>
  );
};
