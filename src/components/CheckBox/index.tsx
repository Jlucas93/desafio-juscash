import { useId } from 'react';

import { Container } from './styles';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  isDisabled?: boolean;
}

export default function CheckBox({
  label,
  checked,
  isDisabled = false,
  ...rest
}: CheckBoxProps) {
  const id = useId();

  return (
    <Container className="checkbox-wrapper-42" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        disabled={isDisabled}
        checked={checked}
        {...rest}
      />
      <span className={isDisabled ? 'disabaledCbx' : 'cbx'} />
      {label ? <p className="lbl">{label}</p> : null}
    </Container>
  );
}
