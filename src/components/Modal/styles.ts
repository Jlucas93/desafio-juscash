import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);

  z-index: 999;
`;

export const Content = styled.div`
  min-width: 50vw;
  min-height: 50vh;

  background: var(--color-white);

  padding: var(--spacing-s1);

  border-radius: var(--border-radius);

  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 15px;
  right: 10px;

  display: flex;
  align-items: center;

  color: var(--color-gray-700);
  background-color: var(--color-gray-300);

  border: 1px solid transparent;
  border-radius: 50%;

  font-size: var(--font-size-xl2);

  cursor: pointer;
`;
