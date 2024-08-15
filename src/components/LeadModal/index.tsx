import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Modal from 'components/Modal';
import { ILead } from 'dtos';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Form } from './styles';

interface ILeadModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  handleAddLead: () => void;
  lead?: ILead | null;
}

const handleUpdateFormSchemaInputNode = z.object({
  email: z.string(),
  name: z.string().min(1, 'Nome muito curto'),
  phone: z.string().min(8, 'Número muito curto'),
  allOptions: z.boolean().default(false),
  creditAuthor: z.boolean(),
});

type HandleFormData = z.infer<typeof handleUpdateFormSchemaInputNode>;

export default function LeadModal({
  isModalOpen,
  closeModal,
  handleAddLead,
  lead,
}: ILeadModalProps) {
  const { handleSubmit, register, control, getValues, setValue } =
    useForm<HandleFormData>({
      resolver: zodResolver(handleUpdateFormSchemaInputNode),
    });

  function handleAllCheckBox() {
    const alloptions = getValues('allOptions');

    setValue('creditAuthor', alloptions);
  }

  const handleFormSubmit: SubmitHandler<HandleFormData> = (data) => {
    const localLeads = JSON.parse(localStorage.getItem('@leads') || '{}');

    localLeads.push({
      id: crypto.randomUUID(),
      name: data.name,
      status: 'potential',
    });

    localStorage.setItem('@leads', JSON.stringify(localLeads));

    toast.success('Usuário cadastrado com sucesso');
    handleAddLead();
  };
  console.log({ lead });
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="title">
          {lead ? <span>Lead</span> : <span>Novo Lead</span>}
        </div>
        <div className="input-container">
          <h3>Dados do Lead</h3>

          <Input
            isRequired
            input_name="name"
            label="Nome Completo*"
            type="text"
            required
            {...register('name')}
          />

          <Input
            isRequired
            input_name="email"
            label="E-mail*"
            type="email"
            required
            {...register('email')}
          />

          <Input
            isRequired
            input_name="name"
            label="Telefone*"
            type="phone"
            required
            {...register('phone')}
          />
        </div>
        <div className="oportunities-container">
          <p>Oportunidades</p>
        </div>

        <div className="checkbox-container">
          <Controller
            name="allOptions"
            control={control}
            render={({ field: { value, onChange } }) => (
              <CheckBox
                label={'Todos'}
                checked={value}
                onChange={(element) => {
                  onChange(element);
                  handleAllCheckBox();
                }}
              />
            )}
          />

          <Controller
            name="creditAuthor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                label={'domlimax'}
                checked={value}
                onChange={onChange}
              />
            )}
          />
        </div>

        <div className="button-container">
          <Button onClick={() => closeModal()}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </div>
      </Form>
    </Modal>
  );
}
