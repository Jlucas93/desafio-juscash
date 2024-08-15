import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: var(--spacing-s3);

  border: 1px solid transparent;

  background-color: var(--color-gray-200);

  & .image-Container {
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .button-container {
    width: 100%;

    padding: var(--spacing-s3);

    display: flex;
    align-items: center;
    justify-content: flex-end;

    & button {
      width: 10rem;

      background-color: #5588b4;
    }
  }
`;
