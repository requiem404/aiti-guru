import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  isFullWidth = true,
  className,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const { cnRoot } = getClasses({ size, variant, className, isFullWidth });

  return (
    <button type="button" className={cnRoot} {...props}>
      {leftIcon && <span>{leftIcon}</span>}

      {children}

      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
