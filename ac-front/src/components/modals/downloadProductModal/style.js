import styled, { keyframes } from "styled-components"
import { Close, Delete, Edit, Restore } from "../../../assets/icons/index"
import { BaseIcon } from "../../../style"

export const FormContent = styled.div`
  margin-top: 20px;
  margin-bottom: 10px; 
  display: flex;
  flex-direction:column;
  gap:10px;
`

export const BackgroundOutsideModal = styled.div`
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Define o padding que será respeitado pelo Modal */

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    z-index: 9997; /* Abaixo do BackgroundOutsideModal */
  }
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: var(--bg-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--box-shadow-secondary);
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow-y: auto;
`;

export const Modal = styled(ModalContent).attrs()`
  width: 100%;
  max-height: fit-content;
  height: 100%; /* Ocupará 100% da altura disponível */
  overflow-y: auto; /* Adiciona scroll quando o conteúdo ultrapassar 350px */
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

export const AlertTextContent = styled.div`
  display: flex;
  justify-content:center;
  width: fit-content;
  width: 100%;
`;

export const AlertText = styled.div`
  color: ${({ type }) => type === "error" ? "var(--danger-color)" : "var(--success-color)"};
  font-weight: 600;
  text-align:center;
  margin-bottom: 20px;
  font-size: 14px;
  background: ${({ type }) => type === "error" ? "var(--danger-color-opacity)" : "var(--success-color-opacity)"};
  padding: 8px;
  border-radius: 10px;
  width: fit-content;
`;
