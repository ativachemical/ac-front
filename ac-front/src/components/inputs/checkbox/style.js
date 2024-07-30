import styled from "styled-components";

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  -webkit-appearance: none;
  border: 2px solid var(--text-solid);
  width: 17px;
  height: 17px;
  border-radius: 30%;
  position: relative;

  &:checked {
    background-color: var(--text-solid);
  }

  &::before {
    content: '\\2713'; /* Código do Unicode para o símbolo de check */
    display: ${props => props.checked ? 'block' : 'none'}; /* Mostra o símbolo apenas quando o checkbox está marcado */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--bg-color); /* Cor do símbolo */
    font-size: 12px; /* Tamanho do símbolo */
    font-weight: bold; /* Peso da fonte */
  }
`;

export const Content = styled.div`
  display: flex;
  gap:7px;
  cursor:pointer;
  align-items: center;
`;



