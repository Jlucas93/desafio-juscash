import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button';
import * as Icons from 'components/Icons';
import Input from 'components/Input';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

  const { handleSubmit, register } = useForm<HandleUpdateFormData>({
    resolver: zodResolver(handleUpdateFormSchemaInputNode),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<HandleUpdateFormData> = (data) => {
    const user = JSON.parse(localStorage.getItem('@user') || '');

    if (user && user.email === data.email && user.password === data.password) {
      return navigate('/leads');
    }

    toast.error('Usuário ou senha inválidos');
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
        {...register('email')}
      />

      <Input
        isRequired
        label="Senha:"
        input_name="password"
        type={showPassword ? 'text' : 'password'}
        required
        rightIcon={
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Icons.Eye /> : <Icons.EyeSlash />}
          </button>
        }
        {...register('password')}
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
