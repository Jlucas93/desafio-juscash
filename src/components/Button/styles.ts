import styled from 'styled-components';

export const Container = styled.button`
  height: var(--spacing-s11);

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s3);

  min-width: 10rem;

  border-radius: var(--border-radius);

  transition: background-color var(300ms) ease-out;

  color: var(--color-white);

  font-size: var(--font-size-lg);

  &:disabled {
    cursor: not-allowed;
  }

  &.full {
    width: 100%;
  }

  & svg {
    height: var(--spacing-s6);
    width: var(--spacing-s6);
  }

  background-color: var(--color-success-base);
  color: (--color-white);

  &:hover {
    background-color: var(--color-success-dark);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-success-light);
  }

  &.danger {
    background-color: var(--color-danger-base);
    border: var(--border-width-thick) solid var(--color-danger-base);
    color: (--color-white);

    &:hover {
      border: var(--border-width-thick) solid transparent;
      background-color: var(--color-danger-dark);
    }

    &:disabled {
      background-color: transparent;
      color: var(--color-gray-900);
      border: var(--border-width-thick) solid var(--color-gray-900);
    }
  }
`;
