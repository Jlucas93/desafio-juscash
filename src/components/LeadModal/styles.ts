import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: var(--spacing-s4);

  margin: var(--spacing-s3) 0;

  padding: var(--spacing-s4);

  border: 1px solid transparent;
  border-radius: var(--border-radius);

  & span {
    font-size: var(--font-size-xl);
    font-weight: bold;

    color: var(--color-gray-900);
  }

  & .title {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    padding-left: var(--spacing-s3);

    margin-bottom: var(--spacing-s3);
  }

  & .input-container {
    width: 70%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    gap: var(--spacing-s3);

    & h3 {
      font-size: var(--font-size-xl);
      font-weight: bold;

      color: var(--color-gray-900);

      padding-left: var(--spacing-s3);
      padding-bottom: var(--spacing-s2);
    }
  }

  & .oportunities-container {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    padding-left: var(--spacing-s3);

    font-size: var(--font-size-xl);
    font-weight: bold;

    color: var(--color-gray-900);
  }

  & .checkbox-container {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-direction: column;

    gap: var(--spacing-s3);

    padding-left: var(--spacing-s3);
  }

  & .button-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

    gap: var(--spacing-s4);
  }
`;
