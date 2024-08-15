import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: var(--spacing-s2);
`;

export const Label = styled.label`
  color: var(--color-gray-900);

  & span {
    color: red;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0.57rem;

  color: var(--color-gray-900);

  background-color: var(--color-white);

  border: 1px solid var(--color-black);

  border-radius: 4px;

  &:focus-within {
    border: 1px solid var(--color-black);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  & svg {
    width: var(--spacing-s5);
    height: var(--spacing-s5);
  }
`;

export const StyledInput = styled.input`
  width: 100%;

  flex: 1;

  border: none;

  outline: none;

  font-size: var(--font-size-md);

  color: var(--color-gray-900);

  padding: var(--spacing-s1);

  &:disabled {
    cursor: not-allowed;

    background-color: var(--color-gray-200);
  }

  &::placeholder {
    color: var(--color-gray-700);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
