import styled from 'styled-components';

export const Container = styled.button`
  height: var(--spacing-s10);

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

  &.primary {
    background-color: var(--color-success-base);
    border: 1px solid var(--color-success-base);
    color: (--color-white);

    &:hover {
      border: 1px solid transparent;
      background-color: var(--color-success-dark);
    }

    &:disabled {
      background-color: transparent;
      color: var(--color-gray-900);
      border: 1px solid var(--color-gray-900);
    }
  }

  &.secondary {
    background-color: var(--color-info-base);
    color: (--color-white);

    &:hover {
      background-color: var(--color-info-dark);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: var(--color-info-light);
    }
  }

  &.terciary {
    background-color: white;
    border: 1px solid var(--color-gray-1000);
    color: var(--color-gray-1000);

    &:hover {
      color: var(--color-danger-base);
      border: 1px solid var(--color-danger-base);
    }

    &:disabled {
      background-color: transparent;
      color: var(--color-gray-900);
      border: 1px solid var(--color-gray-900);
    }
  }
`;
