import { forwardRef, type ComponentPropsWithoutRef, type ForwardRefRenderFunction, type ReactNode } from 'react';
import type { PaginationSize } from '../../lib/types';

import { getClasses } from './styles/get-classes';

type RootComponentProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'>;

export interface ButtonPaginationProps extends RootComponentProps {
  text?: string;
  size?: PaginationSize;
  icon?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  isActive?: boolean;
  isLoading?: boolean;
}

const _Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonPaginationProps> = (
  { className, text, size = 'medium', icon, before, after, isActive = false, isLoading = false, disabled, ...props },
  ref
) => {
  const isEllipsis = text === '...';

  const { cnRoot, cnText, cnIcon, cnBefore, cnAfter, cnSpinner } = getClasses({
    className,
    size,
    isActive,
    isLoading,
    isEllipsis,
  });

  const isDisabled = disabled || isLoading;

  return (
    <button className={cnRoot} disabled={isDisabled} {...props} ref={ref}>
      {before && <span className={cnBefore}>{before}</span>}

      {icon && <span className={cnIcon}>{icon}</span>}
      {text && <span className={cnText}>{text}</span>}

      {after && <span className={cnAfter}>{after}</span>}
      {isLoading && <span>O</span>}
    </button>
  );
};

export const ButtonPagination = forwardRef(_Button);
