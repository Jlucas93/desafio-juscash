import { useId } from 'react';

import { Container } from './styles';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
}

export default function CheckBox({ label, checked, ...rest }: CheckBoxProps) {
  const id = useId();

  return (
    <Container className="checkbox-wrapper-42" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} {...rest} />
      <span className="cbx" />
      {label ? <p className="lbl">{label}</p> : null}
    </Container>
  );
}
