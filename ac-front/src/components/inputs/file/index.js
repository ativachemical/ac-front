import React, { useState } from "react"
import * as Styles from "./style" // Importe todos os estilos do arquivo style
import { DefaultImg } from "../../../assets/imgs"
import { Img } from "../../../style" // Importe Img de style para o componente Img ser reconhecido

export function InputFileBase({ onChange }) {
  return (
    <Styles.UploadContainer>
      <Styles.UploadLabel htmlFor="file-upload">
        Alterar Imagem
      </Styles.UploadLabel>
      <Styles.FileInput
        id="file-upload"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={onChange}
      />
    </Styles.UploadContainer>
  )
}

export function InputFile({ isEdit = false }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  return (
    <>
      {isEdit ? (
        <Styles.ImageUploaderContainer>
          <Styles.ImageContent>
            <Styles.Img
              src={selectedImage || DefaultImg}
              alt="Imagem Padrão"
              borderRadius="20px"
            />
            <InputFileBase onChange={handleImageChange} />
          </Styles.ImageContent>
        </Styles.ImageUploaderContainer>
      ) : (
        <Img
          src={selectedImage || DefaultImg}
          borderRadius={"20px"}
          width={"230px"}
          shadow
        />
      )}
    </>
  )
}
