import type { InputHTMLAttributes, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';

export type InputProps = {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  leftIcon,
  rightIcon,
  onRightIconClick,
  errorMessage,
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2)}`;
  const isError = !!errorMessage;
  const { cnRoot, cnLabel, cnField, cnWrapper, cnIconLeft, cnIconRight, cnErrorMessage } = getClasses({
    className,
    isError,
  });

  return (
    <div className={cnRoot}>
      {label && (
        <label htmlFor={inputId} className={cnLabel}>
          {label}
        </label>
      )}
      <div className={cnWrapper}>
        {leftIcon && <span className={cnIconLeft}>{leftIcon}</span>}
        <input id={inputId} className={cnField} {...props} />
        {rightIcon && (
          <span
            className={cnIconRight}
            onClick={onRightIconClick}
            onKeyDown={e => e.key === 'Enter' && onRightIconClick?.()}
            role="button"
            tabIndex={0}
            aria-label="Clear or toggle"
          >
            {rightIcon}
          </span>
        )}
      </div>
      {isError && <span className={cnErrorMessage}>{errorMessage}</span>}
    </div>
  );
};
