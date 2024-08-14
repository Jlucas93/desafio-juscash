import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: var(--color-white);
  color: var(--color-gray-900);
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
