import { Crab } from '@icon-park/react';
import Link from 'next/link';

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

const LinkList = () => {
  return (
    <div className="flex flex-row gap-12 justify-center max-w-lg w-full">
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

export const Navbar = () => {
  const handleOnClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container w-full ">
      <div className="flex w-full flex-row items-center transition-all duration-300 justify-center md:justify-between   my-5">
        <div className="flex flex-row items-center gap-2 a">
          <Crab size={25} className="text-blue-500 cursor-pointer" aria-label="Blue Nautilus" />
          <p className="font-bold text-blue-500 text-2xl">Blue Nautilus</p>
        </div>
        <LinkList />
        <div className="sm:hidden md:flex">
          <button
            onClick={handleOnClick}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-900 hover:text-white"
          >
            Lets talk!
          </button>
        </div>
      </div>
    </div>
  );
};
