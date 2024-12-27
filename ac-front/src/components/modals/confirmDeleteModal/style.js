import styled, { keyframes } from "styled-components"
import { Close, Delete, Edit, Restore } from "../../../assets/icons/index"
import { BaseIcon } from "../../../style"

export const Content = styled.div`

`

export const BackgroundOutsideModal = styled.div`
  z-index: 9998; /* Deve ser inferior ao modal */
  position: absolute; /* Garantindo que cubra toda a página */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  overflow: hidden;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: fixed; /* Fixado para cobrir toda a tela */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    z-index: 9997; /* Abaixo do BackgroundOutsideModal */
  }
`;



export const ModalContent = styled.div`
  position: relative; /* Adicionando posição relativa para garantir que o z-index funcione */
  z-index: 1; /* Garantindo que o ModalContent apareça acima do BackgroundOutsideModal */
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: var(--bg-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--box-shadow-secondary);
`

export const Modal = styled(ModalContent).attrs()`  
  position: absolute; /* Garantindo que fique sobre tudo */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta o posicionamento para centralização */
  width: 100%;
  ${({ fixed }) =>
    fixed
      ? `
        height: 100%;
        max-height: 500px;
        overflow-y: auto;
      `
      : `
        height: fit-content;
      `}
  user-select: ${({ disableUserSelect }) =>
    disableUserSelect ? "none" : "auto"};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "300px")};
  z-index: 9999; /* Valor alto para estar no topo */
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

export const CloseIcon = styled(BaseIcon).attrs({
  as: Close,
})`
  fill: var(--accent-color);
  &:hover {
    animation: ${spinAnimation} 0.5s ease-in-out;
  }
`

export const EditIcon = styled(BaseIcon).attrs({
  as: Edit,
})`
  fill: var(--accent-color);
`

export const DeleteIcon = styled(BaseIcon).attrs({
  as: Delete,
})`
  fill: var(--accent-color);
`

export const RestoreIcon = styled(BaseIcon).attrs({
  as: Restore,
})`
  fill: var(--accent-color);
`

export const SpaceTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`