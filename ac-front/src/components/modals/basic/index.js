import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./style";
import { Text } from "../../text";
import { Align } from "../../../style";
import { useSelector } from "react-redux";
import { DownloadButton } from "../../buttons/downloadButton";

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
  handleRestore,
  isDeleted = false,
  isClickOutsideClose = false,
  toggleModalButtonDownload
}) {
  const [, setIsEdit] = useState(initialIsEdit);
  const [handleEdit] = useState(initialHandleEdit);
  const userType = useSelector((state) => state.userReducer.userType);
  const modalRef = useRef(null); // Referência para o modal

  // Lida com cliques fora do modal
  const handleClickOutside = (e) => {
    if (
      isClickOutsideClose &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      handleModal();
    }
  };

  useEffect(() => {
    // Adicionar e remover listener de clique
    if (isOpen) {
      return document.addEventListener("mouseup", handleClickOutside);
    }
    return document.removeEventListener("mouseup", handleClickOutside);

  }, [isOpen, isClickOutsideClose]);

  // Adiciona/Remove scroll
  useEffect(() => {
    if (isOpen && fixed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, fixed]);

  useEffect(() => {
    setIsEdit(initialIsEdit);
  }, [initialIsEdit]);

  return fixed ? (
    <Styled.BackgroundOutsideModal isOpen={isOpen}>
      <Styled.Modal
        isOpen={isOpen}
        fixed={fixed}
        disableUserSelect={disableUserSelect}
        maxWidth={maxWidth}
        className="modal-content"
      >
        <Styled.SpaceTop>
          <Text text={title} bold color={"var(--text-solid)"} size={"lg"} />
          <Align gap={"10px"} width={"auto"}>
            <DownloadButton
              idx={1}
              onClick={() => toggleModalButtonDownload()}
              text={'PDF'}
            />
            <Align column alignEnd gap={"10px"} width={"auto"}>
              <Styled.CloseIcon onClick={handleModal} />
              {userType === "admin" && <Styled.EditIcon onClick={toggleEdit} />}
              {!isDeleted && userType === "admin" && (
                <Styled.DeleteIcon onClick={handleDelete} />
              )}
              {isDeleted && userType === "admin" && (
                <Styled.RestoreIcon onClick={handleRestore} />
              )}
            </Align>
          </Align>
        </Styled.SpaceTop>
        {children}
      </Styled.Modal>
    </Styled.BackgroundOutsideModal>
  ) : (
    <Styled.Modal
      ref={modalRef}
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
  );
}
