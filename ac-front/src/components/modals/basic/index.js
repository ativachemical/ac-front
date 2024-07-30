import React, { useEffect, useState } from "react"
import * as Styled from "./style"
import { Text } from "../../text"
import { Align } from "../../../style"
import { useSelector } from "react-redux"

export function BasicModal({
  title,
  isOpen,
  isEdit: initialIsEdit,
  handleEdit: initialHandleEdit = false,
  fixed = false,
  children,
  handleModal,
  toggleEdit,
  disableUserSelect = false,
  maxWidth = "300px",
  handleDelete,
}) {
  const [, setIsEdit] = useState(initialIsEdit)
  const [handleEdit] = useState(initialHandleEdit)
  const userType = useSelector((state) => state.userReducer.userType);

  const handleClickIsOpen = (e) => {
    if (!e.target.closest(".modal-content")) {
      handleModal()
    }
  }

  useEffect(() => {
    if (isOpen && fixed) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, fixed])

  useEffect(() => {
    setIsEdit(initialIsEdit)
  }, [initialIsEdit])

  return fixed ? (
    <Styled.BackgroundOutsideModal isOpen={isOpen} onClick={handleClickIsOpen}>
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
            <Styled.CloseIcon onClick={handleModal} />
            {handleEdit && (userType==="admin") && <Styled.EditIcon onClick={toggleEdit} />}
            {handleEdit && (userType==="admin") && <Styled.DeleteIcon onClick={handleDelete} />}
          </Align>
        </Styled.SpaceTop>
        {children}
      </Styled.Modal>
    </Styled.BackgroundOutsideModal>
  ) : (
    <Styled.Modal
      isOpen={isOpen}
      fixed={fixed}
      disableUserSelect={disableUserSelect}
      maxWidth={maxWidth}
    >
      <Styled.SpaceTop>
        <Text text={title} bold color={"var(--text-solid)"} />
        <Styled.CloseIcon onClick={handleModal} />
        {handleEdit && <Styled.EditIcon onClick={toggleEdit} />}
      </Styled.SpaceTop>
      {children}
    </Styled.Modal>
  )
}
