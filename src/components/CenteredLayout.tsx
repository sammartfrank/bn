type CenteredLayoutProps = {
  children: React.ReactNode;
  navBar?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  centerVertically?: boolean;
  centerHorizontally?: boolean;
};

export const CenteredLayout = ({
  children,
  navBar = undefined,
  footer = undefined,
  className = '',
  centerVertically = true,
  centerHorizontally = true
}: CenteredLayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {navBar}
      <div
        className={`flex-1 flex flex-col ${centerVertically ? 'items-center' : ''} ${
          centerHorizontally ? 'justify-center' : null
        }`}
      >
        {children}
      </div>
      {footer}
    </div>
  );
};
