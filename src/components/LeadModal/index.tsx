import Modal from 'components/Modal';

import { Container } from './styles';

interface ILeadModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function LeadModal({
  isModalOpen,
  closeModal,
}: ILeadModalProps) {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Container>
        <h1>Modal Content</h1>
        <p>This is a modal with some content.</p>
      </Container>
    </Modal>
  );
}
