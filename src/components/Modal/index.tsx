import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { CloseButton, Content, Overlay } from './styles';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  hasCloseButton?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  hasCloseButton = true,
}: IModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {hasCloseButton ? (
          <CloseButton onClick={onClose}>&times;</CloseButton>
        ) : null}
        {children}
      </Content>
    </Overlay>,
    document.body,
  );
}
