import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button';
import Input from 'components/Input';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Form } from './styles';

const handleUpdateFormSchemaInputNode = z.object({
  email: z.string().min(1, 'Nome muito curto'),
  password: z.string().optional().nullable(),
});

export type HandleUpdateFormData = z.infer<
  typeof handleUpdateFormSchemaInputNode
>;

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm<HandleUpdateFormData>({
    resolver: zodResolver(handleUpdateFormSchemaInputNode),
  });

  const [showPassword] = useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<HandleUpdateFormData> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="image-container">
        <img
          src="https://www.juscash.com.br/wp-content/themes/s3/assets/img/logo-white.svg"
          alt=""
        />
      </div>

      <Input
        isRequired
        input_name="email"
        label="E-mail:"
        type="email"
        required
        {...register}
      />

      <Input
        isRequired
        label="Senha:"
        input_name="password"
        type={showPassword ? 'text' : 'password'}
        required
        {...register}
        // rightIcon={
        //   <IconButton
        //     icon={showPassword ? 'eye' : 'eyeslash'}
        //     size="xs"
        //     variant="quaternary"
        //     onClick={() => setShowPassword(!showPassword)}
        //   />
        // }
      />

      <div className="register-wrapper">
        <button onClick={() => navigate('/signup')}>
          Não tem conta? Crie sua conta
        </button>
      </div>
      <Button type="submit" full>
        Entrar
      </Button>
    </Form>
  );
}
