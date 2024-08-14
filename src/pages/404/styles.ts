import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: var(--color-white);
  color: var(--color-gray-900);

  font-size: var(--font-size-xl2);

  gap: var(--spacing-s5);

  & span {
    font-weight: bold;
    color: red;
  }
`;
