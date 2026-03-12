import type { FC, ReactNode } from 'react';
import CustomModal, { type Props as ReactModalProps } from 'react-modal';
import { getClasses } from './styles/get-classes';

export interface DefaultModalProps extends ReactModalProps {
  icon?: ReactNode;
  leftHeaderIcon?: ReactNode;
  isOpen: boolean;
  title?: ReactNode;
  subtitle?: ReactNode;
  onClose?: () => void;
  onCancelClick?: () => void;
  onReturn?: () => void;
  onConfirm?: () => void;
  content?: ReactNode;
  modalContent?: ReactNode;
  mainContentClassName?: string;
  titleClassName?: string;
  headerClassName?: string;
  headerAdditionalContent?: ReactNode;
  isFullScreen?: boolean;
}

export const DefaultModal: FC<DefaultModalProps> = ({
  isOpen,
  onClose,
  content,
  onCancelClick,
  onConfirm,
  shouldCloseOnOverlayClick = true,
  className,
  onReturn,
  isFullScreen,
  ...modalProps
}) => {
  const { cnRoot, cnOverlay, cnContentWrapper } = getClasses({
    className,
    isFullScreen,
  });

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      className={cnRoot}
      overlayClassName={cnOverlay}
      {...modalProps}
      ariaHideApp={false}
      contentElement={(props, children) => (
        <div className={cnContentWrapper}>
          <div {...props}>{children}</div>
        </div>
      )}
    >
      {content}
    </CustomModal>
  );
};
