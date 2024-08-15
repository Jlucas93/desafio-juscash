import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  padding: var(--spacing-s5);

  background-color: var(--color-gray-400);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  user-select: none;

  transition: background-color 0.2s ease;

  border: 1px solid transparent;

  &:active {
    background-color: #e9ecef;
    border-color: #007bff;
  }

  &.dragging {
    color: var(--color-back);

    background-color: #e9ecef;
  }
`;
