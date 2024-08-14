import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import {
  Container,
  IconWrapper,
  InputWrapper,
  Label,
  StyledInput,
} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'time'
    | 'date'
    | 'datetime-local';
  label?: string | boolean;
  input_name?: string;
  isRequired?: boolean;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      leftIcon,
      rightIcon,
      type,
      label,
      input_name,
      fullWidth,
      isRequired = false,
      ...inputProps
    }: Props,
    ref,
  ) => {
    return (
      <Container className={fullWidth ? 'full-width' : undefined}>
        {label ? (
          <Label htmlFor={input_name}>
            {label}
            {isRequired ? <span>*</span> : null}
          </Label>
        ) : null}

        <InputWrapper>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          <StyledInput
            id={input_name}
            name={input_name}
            type={type}
            {...inputProps}
            ref={ref}
          />

          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </InputWrapper>
      </Container>
    );
  },
);

Input.displayName = 'Input';

export default Input;
