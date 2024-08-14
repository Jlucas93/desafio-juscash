import Icon from 'components/Icons';
import { IIconDTO } from 'components/Icons/dtos/IIconDTO';
import React, { CSSProperties, forwardRef } from 'react';

import { Container } from './styles';

interface ButtonIconRootProps {
  icon?: IIconDTO;
  variant?: 'primary' | 'secondary' | 'terciary' | 'quaternary' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  datatestid?: string | null;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  stylesComponent?: CSSProperties;
  className?: string;
}

const IconButton = forwardRef<HTMLDivElement, ButtonIconRootProps>(
  (
    {
      icon,
      variant = 'primary',
      size = 'md',
      full = false,
      loading = false,
      disabled = false,
      onClick,
      datatestid,
      children,
      type = 'button',
      tooltip,
      stylesComponent,
      className,
      onMouseDown,
      ...props
    }: ButtonIconRootProps,
    ref,
  ) => {
    return (
      <>
        <Container
          onClick={onClick}
          data-testid={datatestid}
          className={`${variant} ${disabled} ${size} ${full ? 'full' : ''} ${
            loading ? 'loading' : ''
          } ${className}`}
          style={stylesComponent}
          data-tooltip-id={tooltip}
          ref={ref}
        >
          <button
            type={type === 'button' ? 'button' : 'submit'}
            disabled={disabled || loading}
            aria-label="button-icon"
            data-testid={datatestid ? `${datatestid}-button` : null}
            onMouseDown={onMouseDown}
            {...props}
          >
            {icon ? (
              <Icon.Root
                icon={icon as IIconDTO}
                datatestid={datatestid ? `${datatestid}-icon` : null}
              />
            ) : null}
            {children}
          </button>
        </Container>
      </>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
