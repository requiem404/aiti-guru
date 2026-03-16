import { DefaultModal } from '@shared/ui/default-modal';
import { useModal } from 'react-modal-hook';
import { AddProductForm } from '../ui';

export const useShowAddProductModal = () => {
  const [showAddProductModal, hideAddProductModal] = useModal(
    () => (
      <DefaultModal isOpen onClose={hideAddProductModal} content={<AddProductForm closeForm={hideAddProductModal} />} />
    ),
    []
  );

  return { showAddProductModal, hideAddProductModal };
};
