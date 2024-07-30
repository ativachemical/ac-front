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
  &:focus + label {
    transform: translateY(-1.5rem);
    color: var(--primary-color);
  }
  &:focus {
    border: 2px solid var(--primary-color);
  }
  &:focus,
  &:valid {
    outline: none;
  }
  &:placeholder-shown + label {
    transform: translateY(1rem);
    background: var(--danger-color);
  }
  &:-webkit-autofill + label {
    animation-name: onAutoFillStart;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background: #0000;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #121214 inset;
    border: 1px solid #fff;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #f5f5f547 !important;
  }
  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(75%);
  }
  @keyframes onAutoFillStart {
    from {
      opacity: 0;
    }
    to {
      transform: translateY(-1.5rem);
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
  &:focus + label {
    transform: translateY(-1.5rem);
    color: var(--primary-color);
  }
  &:focus {
    border: 2px solid var(--primary-color);
  }
  &:focus,
  &:valid {
    outline: none;
  }
  &:placeholder-shown + label {
    transform: translateY(1rem);
    background: var(--danger-color);
  }
  &:-webkit-autofill + label {
    animation-name: onAutoFillStart;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background: #0000;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #121214 inset;
    border: 1px solid #fff;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #f5f5f547 !important;
  }
  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(75%);
  }
  @keyframes onAutoFillStart {
    from {
      opacity: 0;
    }
    to {
      transform: translateY(-1.5rem);
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
`;
