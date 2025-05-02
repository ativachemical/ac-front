import React, { useEffect, useState } from "react"
import * as Styled from "./style"
import { Text } from "../../text"
import { Align } from "../../../style"
import { Button } from "../../buttons/button"

export function ConfirmDeleteModal({
  title = "Confirmar Deleleção",
  isOpen = true,
  fixed = false,
  children,
  handleModal,
  text = 'Tem certeza que deseja deletar?',
  disableUserSelect = false,
  maxWidth = "400px",
  confirmFunction
}) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    handleModal();//se nao ativar esse está ficando com double click
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);


  return (
    //onClick={handleClickIsOpen}
    <Styled.BackgroundOutsideModal isOpen={isModalOpen}> 
      <Styled.Modal
        isOpen={isOpen}
        fixed={fixed}
        disableUserSelect={disableUserSelect}
        maxWidth={maxWidth}
        className="modal-content"
      >
        <Styled.SpaceTop>
          <Text text={title} bold color={"var(--text-solid)"} size={"lg"} />
          <Align column alignEnd gap={"10px"} width={"auto"}>
            <Styled.CloseIcon onClick={toggleModal} />
          </Align>
        </Styled.SpaceTop>
          
          <Text text={text}/>

          <Align gap={"20px"} justify={"center"}>

          <Button
            text={"Confirmar"}
            onClick={confirmFunction}
            type={"primary"}
            />
          <Button
            text={"Cancelar"}
            onClick={toggleModal}
            type={"secondary"}
            />
          </Align>

        {children}
      </Styled.Modal>
    </Styled.BackgroundOutsideModal>
  )
}
