import { forwardRef } from 'react';

interface SelectPropsWithChildren {}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    SelectPropsWithChildren {
  className?: string;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  label?: string;
  options?: Array<string>;
}

type SelectRef = React.ForwardedRef<HTMLSelectElement>;

const Select = forwardRef(
  (
    {
      className,
      children,
      color = 'primary',
      disabled = false,
      outline = false,
      rounded,
      shadow = true,
      label = '',
      options = [],
      ...props
    }: SelectProps,
    ref: SelectRef
  ) => {
    let colorCN = `focus:border-primary-200 focus:ring-primary-200`;
    if (color === 'secondary') {
      colorCN = `focus:border-secondary-200 focus:ring-secondary-200`;
    }
    return (
      <label className={`${className} block`}>
        {label && <span className="block mb-2 text-gray-500 select-none font-medium">{label}</span>}
        <select
          disabled={disabled}
          ref={ref}
          {...props}
          className={`block ${
            disabled && 'cursor-not-allowed'
          } ${colorCN} form-select border rounded-lg shadow-sm w-full focus:ring-2 `}
        >
          {children}
        </select>
      </label>
    );
  }
);

Select.displayName = 'Select';

export { Select };
