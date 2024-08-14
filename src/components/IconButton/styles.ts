import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  height: var(--spacing-s10);
  display: flex;
  align-items: center;
  justify-content: center;

  &.full {
    width: 100%;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-s2);
    border-radius: var(--border-radius-sm);

    transition: background-color var(--animation-normal) ease-out;
  }

  & span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: var(--spacing-s6);
    height: var(--spacing-s6);
  }

  &.xs button {
    padding: var(--spacing-s1) var(--spacing-s1);
  }

  &.xs svg {
    width: var(--spacing-s4);
    height: var(--spacing-s4);
  }

  /* &.lg svg {
    width: var(--spacing-s7);
    height: var(--spacing-s7);
  } */

  &.sm button {
    height: var(--spacing-s10);

    padding: var(--spacing-s1) var(--spacing-s2);
  }

  &.md button {
    padding: var(--spacing-s2) var(--spacing-s4);
  }

  &.lg button {
    padding: var(--spacing-s3) var(--spacing-s5);
  }

  &.full button {
    width: 100%;
  }

  &.primary button {
    background-color: var(--color-primary-base);
    color: #fff;

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: var(--color-primary-lighter);
      opacity: 0.5;
    }
  }

  &.secondary button {
    background-color: transparent;
    color: var(--color-gray-900);
    border: var(--border-width-thick) solid var(--color-gray-400);

    &:hover {
      border: var(--border-width-thick) solid var(--color-primary-base);
      color: var(--color-primary-base);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--color-gray-700);
      border: var(--border-width-thick) solid var(--color-gray-500);
      opacity: 0.5;
    }
  }

  &.terciary button {
    background-color: transparent;
    color: var(--color-primary-base);

    &:hover {
      color: var(--color-primary-dark);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--color-gray-700);
      opacity: 0.5;
    }
  }

  &.quaternary button {
    background-color: transparent;
    border: var(--border-width-thick) solid transparent;
    color: var(--color-gray-900);
    &:hover {
      color: var(--color-primary-base);
    }
    &:disabled {
      cursor: not-allowed;
      color: var(--color-gray-700);
      opacity: 0.5;
    }
  }

  &.danger button {
    background-color: transparent;
    color: var(--color-gray-900);
    border: var(--border-width-thick) solid transparent;

    &:hover {
      /* border: var(--border-width-thick) solid var(--color-danger-base); */
      color: var(--color-danger-dark);
    }

    &:disabled {
      cursor: not-allowed;
      color: var(--color-gray-700);
      opacity: 0.5;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  /* @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  } */
`;
