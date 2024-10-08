import { CSSProperties, forwardRef, ReactNode } from 'react';

import { Container } from './styles';

interface IButtonDefaultRootProps {
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'terciary';
}

const Button = forwardRef<HTMLButtonElement, IButtonDefaultRootProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      full = false,
      type = 'button',
      disabled = false,
      onClick,
      children,
      style,
      ...rest
    }: IButtonDefaultRootProps,
    ref,
  ) => {
    return (
      <>
        <Container
          ref={ref}
          type={type}
          disabled={disabled}
          className={`${variant}  ${size} ${full ? 'full' : ''}`}
          onClick={onClick ? onClick : undefined}
          aria-label="button-default"
          style={style}
          {...rest}
        >
          {children}
        </Container>
      </>
    );
  },
);

Button.displayName = 'Button';

export default Button;
