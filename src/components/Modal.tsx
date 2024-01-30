import { createPortal } from 'react-dom';
import { ModalProps } from '../types.ts';

export default function Modal({ title, children, onClose }: ModalProps) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal">
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}
