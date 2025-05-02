import styled from 'styled-components';

const getMaxHeight = (size) => {
  switch (size) {
    case 'sm':
      return '40px';
    case 'md':
      return '50px';
    case 'lg':
      return '60px';
    case 'all':
      return '100%';
    default:
      return '50px';
  }
};

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => (props.maxW ? `${props.maxW}` : '100%')};
`;

export const InputWithLabel = styled.div`
display: flex;
flex-direction:column;
width: 100%;
gap:3px;
`;

export const Input = styled.input`
  border: 2px solid var(--accent-color);
  border-radius: 10px;
  width: 100%;
  background: var(--bg-primary);
  padding: 10px;
  font-size: 16px;
  color: var(--text-solid);
  max-height: ${(props) => getMaxHeight(props.size)};
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'width: 200px;';
      case 'md':
        return 'width: 250px;';
      case 'lg':
        return 'width: 300px;';
      case 'all':
        return 'width: 100%;';
      default:
        return 'width: 100%;';
    }
  }}

  /* Fixando o placeholder */
  &::placeholder {
    color: var(--text-color); /* Ajuste para a cor do placeholder */
  }

  &:focus {
    border: 2px solid var(--primary-color);
    outline: none;
  }

  &:focus + label {
    transform: translateY(-1.5rem);
    color: var(--primary-color);
  }

  &:valid,
  &:not(:placeholder-shown) {
    /* Isso garante que o label ficará no topo quando o campo estiver preenchido */
    &:focus + label {
      transform: translateY(-1.5rem);
      color: var(--primary-color);
    }
  }
`;

export const Textarea = styled.textarea`
  resize: vertical;
  border: 2px solid var(--accent-color);
  border-radius: 10px;
  width: 100%;
  background: var(--bg-primary);
  padding: 10px;
  font-size: 16px;
  color: var(--text-solid);
  height: ${(props) => (props.height ? props.height : 'auto')};
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'width: 200px;';
      case 'md':
        return 'width: 250px;';
      case 'lg':
        return 'width: 300px;';
      case 'all':
        return 'width: 100%;';
      default:
        return 'width: 100%;';
    }
  }}

  /* Fixando o placeholder */
  &::placeholder {
    color: var(--text-color); /* Ajuste para a cor do placeholder */
  }

  &:focus {
    border: 2px solid var(--primary-color);
    outline: none;
  }

  &:focus + label {
    transform: translateY(-1.5rem);
    color: var(--primary-color);
  }

  &:valid,
  &:not(:placeholder-shown) {
    /* Isso garante que o label ficará no topo quando o campo estiver preenchido */
    &:focus + label {
      transform: translateY(-1.5rem);
      color: var(--primary-color);
    }
  }
`;

export const Label = styled.label`
  font-weight: 500;
  position: absolute;
  left: 15px;
  color: #f5f5f547;
  pointer-events: none;
  transform: ${({ isFocus }) => (isFocus ? 'translateY(-1.5rem)' : 'translateY(10px)')};
  background: transparent;

  /* Para garantir que o label não mova quando o placeholder estiver visível */
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
`;
