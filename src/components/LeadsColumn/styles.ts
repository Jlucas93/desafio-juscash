import styled from 'styled-components';

export const Column = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: var(--border-radius);

  gap: var(--spacing-s3);

  & .cards-container {
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    gap: var(--spacing-s3);
  }
`;

export const ColumnTitle = styled.h3`
  text-align: center;

  border: 1px solid var(--color-gray-500);

  padding: var(--spacing-s4);
`;
