import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import Modal from 'components/Modal';
import { ILead } from 'dtos';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addLead, getLeadsByEmail, updateLead } from 'services/leadService';
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
  honorSucumbencial: z.boolean(),
  honorDative: z.boolean(),
  honorContractual: z.boolean(),
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
      defaultValues: {
        name: lead ? lead.name : '',
        email: lead ? lead.email : '',
        phone: lead ? lead.phone : '',
        allOptions: lead ? lead.allOptions : true,
        creditAuthor: lead ? lead.creditAuthor : true,
        honorSucumbencial: lead ? lead.honorSucumbencial : true,
        honorDative: lead ? lead.honorDative : true,
        honorContractual: lead ? lead.honorContractual : true,
      },
    });

  function handleAllCheckBox() {
    const alloptions = getValues('allOptions');

    setValue('creditAuthor', alloptions);
    setValue('honorContractual', alloptions);
    setValue('honorSucumbencial', alloptions);
    setValue('honorDative', alloptions);
  }

  function handleFormSubmit(data: HandleFormData) {
    const existingLead = getLeadsByEmail(data.email);

    if (lead) {
      updateLead({ lead: { ...lead, ...data }, email: lead.email });

      toast.success('Lead atualizado com sucesso');
    } else {
      if (existingLead) toast.error('Já existe um lead com este e-mail');

      addLead({
        id: crypto.randomUUID(),
        status: 'potential',
        ...data,
      });

      toast.success('Lead cadastrado com sucesso');
    }

    handleAddLead();
    closeModal();
  }

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
            disabled={lead ? true : false}
            input_name="name"
            label="Nome Completo*"
            type="text"
            required
            {...register('name')}
          />

          <Input
            isRequired
            disabled={lead ? true : false}
            input_name="email"
            label="E-mail*"
            type="email"
            required
            {...register('email')}
          />

          <Input
            isRequired
            disabled={lead ? true : false}
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
                disabled={lead ? true : false}
                checked={value ? value : false}
                onChange={(element) => {
                  onChange(element);
                  handleAllCheckBox();
                }}
              />
            )}
          />

          <Controller
            name="honorSucumbencial"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                label={'Honorários Sucumbenciais'}
                checked={value ? value : false}
                isDisabled={lead ? true : false}
                onChange={(element) => {
                  onChange(element);
                  setValue('allOptions', false);
                }}
              />
            )}
          />
          <Controller
            name="honorContractual"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                label={'Honorários contratatuais'}
                checked={value ? value : false}
                isDisabled={lead ? true : false}
                onChange={(element) => {
                  onChange(element);
                  setValue('allOptions', false);
                }}
              />
            )}
          />
          <Controller
            name="honorDative"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                label={'Honorários Dativos'}
                checked={value ? value : false}
                isDisabled={lead ? true : false}
                onChange={(element) => {
                  onChange(element);
                  setValue('allOptions', false);
                }}
              />
            )}
          />
          <Controller
            name="creditAuthor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckBox
                label={'Crédito do Autor'}
                checked={value ? value : false}
                isDisabled={lead ? true : false}
                onChange={(element) => {
                  onChange(element);
                  setValue('allOptions', false);
                }}
              />
            )}
          />
        </div>

        <div className="button-container">
          <Button variant="terciary" onClick={() => closeModal()}>
            Cancelar
          </Button>
          <Button variant="secondary" type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
