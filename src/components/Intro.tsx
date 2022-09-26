import Image from 'next/image';
export const Intro = () => {
  return (
    <div className="container bg-white h-screen w-full my-10" id="team">
      <div className="w-full">
        <h1 className="text-7xl md:text-9xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 bg-white">
          TEAM
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full">
          <Image src="/assets/team.png" alt="Team" width={800} height={600} />
        </div>
        <div className="flex-col md:flex-row gap-3 ">
          <h2 className="max-w-lg text-xl md:text-2xl text-blue-900">
            We are a team of <i className="font-semibold text-blue-500">passionate</i> developers,
            designers, and entrepreneurs who are{' '}
            <i className="font-semibold text-blue-500">dedicated</i> to build the{' '}
            <i className="font-semibold text-blue-500">solution</i> for your business. We thrive on
            the challenge of creating a <i className="font-semibold text-blue-500">product</i> that
            will help you grow your business. The problems we solve are complex, and we are up for
            the challenge.
          </h2>
          <br />
          <h2 className="max-w-lg text-xl md:text-2xl text-blue-900">
            Albeist, we are a small team, we know we can make a{' '}
            <i className="font-semibold text-blue-500">difference</i> in your business. We are
            <i className="font-semibold text-blue-500"> here</i> to help you grow your business.
          </h2>
        </div>
      </div>
    </div>
  );
};
