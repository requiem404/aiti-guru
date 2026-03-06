import type { ButtonHTMLAttributes } from 'react';
import { getClasses } from './styles/get-classes';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  isFullWidth = true,
  className,
  children,
  ...props
}: ButtonProps) => {
  const { cnRoot } = getClasses({ size, variant, className, isFullWidth });

  return (
    <button type="button" className={cnRoot} {...props}>
      {children}
    </button>
  );
};
