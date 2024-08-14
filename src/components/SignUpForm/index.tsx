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

export default function LoginForm() {
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
        label="Seu nome completo"
        isRequired
        input_name="email"
        type="email"
        required
        {...register}
      />

      <Input
        isRequired
        input_name="email"
        label="E-mail"
        type="email"
        required
        {...register}
      />

      <Input
        isRequired
        label="Senha"
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
      <Input
        isRequired
        label="Confirme sua senha"
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
        <button type="button" onClick={() => navigate('/')}>
          Já possui uma conta? Fazer o login
        </button>
      </div>

      <Button type="submit" full>
        Entrar
      </Button>
    </Form>
  );
}
