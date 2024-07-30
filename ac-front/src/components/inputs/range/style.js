import styled from 'styled-components';

export const Range = styled.input.attrs({ type: 'range' })`
  cursor: pointer;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    var(--accent-color) 0%,
    var(--accent-color) ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
    var(--bg-secondary-color) ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
    var(--bg-secondary-color) 100%
  );
  outline: none;
  transition: background 0.2s;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent-color);
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;
`;