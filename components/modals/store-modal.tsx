"use client";

import Modal from "@/components/ui/modal";
import useStoreModal from "@/hooks/use-store-modal";

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  return (
    <Modal
      isOpen={isOpen}
      title="Store Modal"
      description="Store Modal Description"
      onClose={onClose}
    >
      children
    </Modal>
  );
};

export default StoreModal;
