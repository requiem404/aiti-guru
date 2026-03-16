import classNames from 'classnames/bind';

import { type DefaultModalProps } from '../default-modal';
import classes from './default-modal.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ({
  className,
  isFullScreen,
}: Pick<DefaultModalProps, 'className' | 'isFullScreen' | 'overlayClassName'>) => {
  const cnRoot = cn('modal', className);

  const cnOverlay = cn('overlay');

  const cnContentWrapper = cn('overlay__content-wrapper', {
    'overlay__content-wrapper--full-screen': isFullScreen,
  });

  return { cnRoot, cnOverlay, cnContentWrapper };
};
