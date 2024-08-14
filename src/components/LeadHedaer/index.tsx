import Button from 'components/Button';
import * as Icons from 'components/Icons';
import LeadModal from 'components/LeadModal';
import { useState } from 'react';

import { Container } from './styles';

export default function LeadHeader() {
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
        <Button type="submit" full onClick={() => setOpenModal(true)}>
          <Icons.Add />
          Novo Lead
        </Button>
      </div>

      {openModal ? (
        <LeadModal
          isModalOpen={openModal}
          closeModal={() => setOpenModal(false)}
        />
      ) : null}
    </Container>
  );
}
