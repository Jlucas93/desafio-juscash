import Button from 'components/Button';
import * as Icons from 'components/Icons';

import { Container } from './styles';

export default function LeadHeader() {
  return (
    <Container>
      <div className="image-Container">
        <img
          src="https://www.juscash.com.br/wp-content/themes/s3/assets/img/logo-white.svg"
          alt="falha ao carregar imagem"
        />
      </div>
      <div className="button-container">
        <Button type="submit" full>
          <Icons.Add />
          Novo Lead
        </Button>
      </div>
    </Container>
  );
}
