import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ModalProps } from '../types.ts';

export default function Modal({ title, children, onClose }: ModalProps) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')!
  );
}
