import { HamburgerButton } from '@icon-park/react';

export const BurgerButton = ({ openMobileMenuHandler }: { openMobileMenuHandler: () => void }) => {
  return (
    <div className="space-y-2 cursor-pointer absolute left-5 top-0">
      <HamburgerButton
        className="cursor-pointer absolute mt-1.5 -ml-0.5"
        theme="outline"
        size="32"
        fill="#3B82F6"
        onClick={openMobileMenuHandler}
      />
    </div>
  );
};
