import Image from 'next/image';
export const Intro = () => {
  return (
    <div className="container bg-white h-screen w-full my-10">
      <div className="w-full">
        <h1 className="text-9xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-gray-50 to-white bg-white">
          TEAM
        </h1>
      </div>
      <div className="flex flex-row gap-10">
        <Image src="/assets/team.png" alt="Team" width={800} height={600} />
        <h2 className="max-w-lg mt-28 text-2xl text-blue-900">
          We are a team of passionate developers, designers, and entrepreneurs who are dedicated to
          building the solution for your business. We thrive on the challenge of creating a product
          that will help you grow your business. The problems we solve are complex, but we are up
          for the challenge.
        </h2>
        <br />
        <h2>
          Albeist, we are a small team, we are a team that is dedicated to providing you with the
          best solution for your business. Therefore, we excel at what we do and we are always
          looking to improve.
        </h2>
      </div>
    </div>
  );
};
