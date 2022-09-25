export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="z-10 bg-[#273036] py-2 w-full">
      <div className="container text-left text-white flex flex-row gap-5 items-center justify-center w-full">
        <h3 className="text-lg font-semibold">Blue Nautilus</h3>
        <p>55 Southeast 6th Street 1910 Miami, FL 33131 United States </p>
        <p>© {getYear()} Blue Nautilus llc. All rights reserved.</p>
      </div>
    </div>
  );
};
