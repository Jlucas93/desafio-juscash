import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  gap: var(--spacing-s1);

  & input[type='checkbox'] {
    display: none;
    visibility: hidden;
  }

  & label {
    display: inline-block;
  }

  & .cbx {
    position: relative;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-gray-500);
    border-radius: 3px;
    vertical-align: middle;
    transition: background 0.1s ease;
    cursor: pointer;

    &.disabaled {
      cursor: not-allowed;
    }
  }

  & .cbx:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 6px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid var(--color-white);
    border-bottom: 2px solid var(--color-white);
    transition: all 0.3s ease;
    transition-delay: 0.15s;
  }

  & .lbl {
    margin-left: 5px;
    vertical-align: middle;
    cursor: pointer;
  }

  & input[type='checkbox']:checked ~ .cbx {
    border-color: transparent;
    background: blue;
    animation: jelly-42 0.6s ease;
    background: var(--color-info-base);
  }

  & input[type='checkbox']:checked ~ .cbx:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }

  & .cntr {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

export const Label = styled.label``;
