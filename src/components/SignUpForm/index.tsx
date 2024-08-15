import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button';
import * as Icons from 'components/Icons';
import Input from 'components/Input';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Form } from './styles';

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const formschema = z
  .object({
    name: z.string().min(1, 'Nome muito curto'),
    email: z.string(),
    password: z
      .string()
      .min(8, 'Senha muito curta')
      .regex(
        passwordRegex,
        'A senha deve incluir pelo menos um caractere especial, um numérico e um alfanumérico',
      ),
    confirmPassword: z
      .string()
      .min(8, 'Senha muito curta')
      .regex(
        passwordRegex,
        'A senha deve incluir pelo menos um caractere especial, um numérico e um alfanumérico',
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  });

type HandleFormData = z.infer<typeof formschema>;

export default function SignUpForm() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<HandleFormData>({
    resolver: zodResolver(formschema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmShowPassword] =
    useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<HandleFormData> = (data) => {
    localStorage.setItem('@user', JSON.stringify(data));
    navigate('/login');
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="image-container">
        <img
          src="https://www.juscash.com.br/wp-content/themes/s3/assets/img/logo-white.svg"
          alt="falha ao carregar imagem"
        />
      </div>

      <Input
        label="Seu nome completo"
        isRequired
        input_name="name"
        type="text"
        required
        {...register('name')}
      />

      <Input
        isRequired
        input_name="email"
        label="E-mail"
        type="email"
        required
        {...register('email')}
      />

      <Input
        isRequired
        label="Senha"
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

      <Input
        isRequired
        label="Confirme sua senha"
        input_name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        required
        rightIcon={
          <button
            type="button"
            onClick={() => setConfirmShowPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <Icons.Eye /> : <Icons.EyeSlash />}
          </button>
        }
        {...register('confirmPassword')}
      />

      {errors && errors.confirmPassword ? (
        <div className="error-container">
          <span>{errors.confirmPassword.message}</span>
        </div>
      ) : null}

      <div className="register-wrapper">
        <button type="button" onClick={() => navigate('/login')}>
          Já possui uma conta? Fazer o login
        </button>
      </div>

      <Button type="submit" full>
        Criar conta
      </Button>
    </Form>
  );
}
