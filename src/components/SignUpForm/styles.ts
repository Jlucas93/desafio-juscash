import styled from 'styled-components';

export const Form = styled.form`
  width: 30%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: var(--spacing-s3);

  margin: var(--spacing-s3) 0;

  padding: var(--spacing-s3);

  border: 1px solid transparent;
  border-radius: var(--border-radius);

  & .image-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: var(--spacing-s4);
  }

  & .error-container {
    width: 100%;

    display: flex;
    align-self: center;
    justify-content: flex-start;

    & span {
      color: red;
    }
  }

  & .register-wrapper {
    width: 100%;

    display: flex;
    align-self: center;
    justify-content: flex-end;

    & button {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
