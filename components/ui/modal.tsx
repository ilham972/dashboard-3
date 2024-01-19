"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, title, description, onClose }: ModalProps) => {
  {
    return (
      <Dialog open={isOpen} onOpenChange={(e) => !e && onClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div>children</div>
        </DialogContent>
      </Dialog>
    );
  }
};
export default Modal;
