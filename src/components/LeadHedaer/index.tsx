import Button from 'components/Button';
import * as Icons from 'components/Icons';
import LeadModal from 'components/LeadModal';
import { useState } from 'react';

import { Container } from './styles';

interface ILeadHeaderProps {
  handleAddLead: () => void;
}

export default function LeadHeader({ handleAddLead }: ILeadHeaderProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <div className="image-Container">
        <img
          src="https://www.juscash.com.br/wp-content/themes/s3/assets/img/logo-white.svg"
          alt="falha ao carregar imagem"
        />
      </div>

      <div className="button-container">
        <Button
          variant="secondary"
          type="submit"
          full
          onClick={() => setOpenModal(true)}
        >
          <Icons.Add />
          Novo Lead
        </Button>
      </div>

      {openModal ? (
        <LeadModal
          handleAddLead={() => handleAddLead()}
          isModalOpen={openModal}
          closeModal={() => setOpenModal(false)}
        />
      ) : null}
    </Container>
  );
}
