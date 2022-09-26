import Image from 'next/image';
import { FaReact, FaAws, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const techs = [
  {
    id: 1,
    icon: <FaReact size={55} className="" />
  },
  {
    id: 2,
    icon: <FaAws size={55} className="cursor-pointer" />
  },
  {
    id: 3,
    icon: <FaJs size={55} />
  },
  {
    id: 4,
    icon: <SiTypescript size={55} />
  }
];

const TechList = () => {
  return (
    <div className="container max-w-2xl flex flex-row justify-between mx-auto text-gray-300">
      {techs.map((tech) => {
        return <div key={tech.id}>{tech.icon}</div>;
      })}
    </div>
  );
};

export const Goals = () => {
  return (
    <div className="relative container w-full h-screen flex flex-col" id="goals">
      <div className="w-full">
        <h1 className="text-7xl md:text-9xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 bg-white mt-14">
          OUR GOAL
        </h1>
      </div>
      <div className="w-full">
        <div className="flex flex-row gap-10">
          <div>
            <p className="text-xl md:text-2xl  text-blue-900 max-w-md mt-24">
              <i className="text-blue-500 font-semibold">Blue Nautilus</i> aims to have a valuable
              impact on your Idea. If theres a problem and its solution goes by with the
              <i className="text-blue-500 font-semibold">appropiate heuristic</i>, we surely can
              provide a solution.
            </p>
            <div className="border-b-2 border-blue-500 w-1/3 my-14" />
            <p className="text-xl md:text-2xl  text-blue-900 max-w-md ">
              &quot;Once you understand the importance of digital exposure, you will be able to
              <i className="text-blue-500 font-semibold">reach your audience</i> and{' '}
              <i className="text-blue-500 font-semibold">grow your business</i> in a way that you
              never thought possible.&quot;
            </p>
            <i className="text-blue-500 font-semibold">Frank Sammartino</i>
          </div>
          <div className="hidden lg:flex">
            <Image src="/assets/ideas.png" alt="Ideas" width={800} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};
