import * as Icons from 'components/Icons';
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
      <Content onClick={(element) => element.stopPropagation()}>
        {hasCloseButton ? (
          <CloseButton onClick={onClose}>
            <Icons.Close />
          </CloseButton>
        ) : null}
        {children}
      </Content>
    </Overlay>,
    document.body,
  );
}
