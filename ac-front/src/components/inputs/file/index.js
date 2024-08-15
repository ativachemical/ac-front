import React, { useEffect, useState } from "react"
import * as Styles from "./style"
import { DefaultImg } from "../../../assets/imgs"
import { Align, Img } from "../../../style"
import api from "../../../services/ac-api"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../buttons/button"
import { setProductImage } from "../../../redux/product/slice"

export function InputFileBase({ onChange, onSave }) {
  const isModalByIdOpen = useSelector(
    (state) => state.productReducer.isModalByIdOpen
  )

  return (
    <Styles.UploadContainer>
      <Styles.UploadLabel htmlFor="file-upload">Substituir</Styles.UploadLabel>
      <Styles.FileInput
        id="file-upload"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={onChange}
      />
      {isModalByIdOpen && (
        <Button text={"Salvar"} onClick={onSave} type={"primary"} />
      )}
    </Styles.UploadContainer>
  )
}

export function InputFile({
  isEdit = false,
  productId,
  userToken,
  defaultImage,
  onChange,
}) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(DefaultImg)
  const [imageDetails, setImageDetails] = useState({})

  const dispatch = useDispatch()
  const userType = useSelector((state) => state.userReducer.userType)

  useEffect(() => {
    if (defaultImage?.base64Image) {
      setImagePreview(
        `data:image/${defaultImage.extension};base64,${defaultImage.base64Image}`
      )
      setImageDetails({
        resolution: defaultImage.resolution,
        extension: defaultImage.extension,
        sizeKB: defaultImage.sizeKB,
        sizeMB: defaultImage.sizeMB,
      })
    }
  }, [defaultImage])

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview !== DefaultImg) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))

      const reader = new FileReader()
      reader.onload = (e) => {
        const base64Image = e.target.result

        const img = new Image()
        img.onload = () => {
          const resolution = `${img.width} x ${img.height}`
          const extension = file.name.split(".").pop()
          const sizeKB = (file.size / 1024).toFixed(2)
          const sizeMB = (file.size / (1024 * 1024)).toFixed(2)

          setImageDetails({
            resolution,
            extension,
            sizeKB,
            sizeMB,
          })
          dispatch(setProductImage(file))
        }
        img.src = base64Image
      }
      reader.readAsDataURL(file)

      if (onChange) {
        onChange(file)
      }
    } else {
      console.warn("Nenhum arquivo foi selecionado.")
    }
  }

  const handleSubmit = async () => {
    if (selectedImage) {
      try {
        await editProductImage(
          productId,
          selectedImage,
          userToken
        )
        setImagePreview(URL.createObjectURL(selectedImage))
      } catch (error) {
        console.error("Erro ao enviar imagem:", error)
      }
    } else {
      console.warn("Nenhuma imagem foi selecionada para envio.")
    }
  }

  return (
    <>
      {isEdit && userType === "admin" ? (
        <Styles.ImageUploaderContainer>
          <Styles.ImageContent>
            <Styles.Img
              src={imagePreview}
              alt="Imagem do Produto"
              borderRadius="20px"
            />
            <Align width={"100%"} column>
              <p>Resolução: {imageDetails.resolution || "0"}</p>
              <p>Extensão: {imageDetails.extension || "0"}</p>
              <p>
                {imageDetails.sizeKB || "0"}KB - {imageDetails.sizeMB || "0"}MB
              </p>
            </Align>
            <InputFileBase onChange={handleImageChange} onSave={handleSubmit} />
          </Styles.ImageContent>
        </Styles.ImageUploaderContainer>
      ) : (
        <Img src={imagePreview} borderRadius="20px" width="230px" margin="initial" shadow />
      )}
    </>
  )
}

const editProductImage = async (id, productImage, userToken) => {
  try {
    const formData = new FormData()
    formData.append("file", productImage)
    const response = await api.post(`/product/upload-image/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  } catch (error) {
    console.error("Erro ao fazer a requisição da API:", error)
    throw error
  }
}
