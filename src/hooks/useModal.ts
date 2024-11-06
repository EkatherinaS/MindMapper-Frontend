import { useState } from "react";

interface UseModalReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
}