import React, { useState, useEffect } from "react"
import { BasicModal } from "../../modals/basic"
import {
  Button,
  InputFile,
  DynamicInputs,
  SegmentIconsInput,
  InputSimple,
} from "../../index"
import { Align } from "../../../style"
import { useSelector, useDispatch } from "react-redux"
import {
  setProductImage,
  toggleIsModalByIdOpen,
  toggleIsModalCreateProductOpen,
} from "../../../redux/product/slice"
import api from "../../../services/ac-api"
import { InputTable } from "../../inputs/inputTable"

export const editProductById = async (id, productEdited, userToken) => {
  try {
    const response = await api.put(`/product/${id}`, productEdited, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })

    return response.data
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const changeDeleteStatusProductById = async (id, userToken) => {
  try {
    const response = await api.put(
      `/product/change-delete-status/${id}?is_deleted=true`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const createProduct = async (imageFile, product, userToken) => {
  const formData = new FormData()
  if (imageFile) {
    formData.append("image", imageFile)
  } else {
    console.warn("Nenhuma imagem foi fornecida.")
  }

  formData.append("createProductDto", JSON.stringify(product))

  try {
    const response = await api.post(`/product`, formData, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
      },
    })

    return response.data
  } catch (error) {
    console.error("Error making the API request:", error)
    throw error
  }
}

export function ProductModalById({ productById, productImageById }) {
  const [product, setProduct] = useState(null)
  const [comercialName, setComercialName] = useState("")
  const [chemicalName, setChemicalName] = useState("")
  const [functionProduct, setFunctionProduct] = useState("")
  const [application, setApplication] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [segmentListActive, setSegmentListActive] = useState({
    agricultura: false,
    tintas_e_resinas: false,
    tratamento_de_agua: false,
    cuidados_em_casa: false,
  })
  const [inputTopics, setInputTopics] = useState([])
  const [inputTable, setInputTable] = useState("")

  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.userReducer.userToken)
  const isModalByIdOpen = useSelector(
    (state) => state.productReducer.isModalByIdOpen
  )
  const isModalCreateProductOpen = useSelector(
    (state) => state.productReducer.isModalCreateProductOpen
  )
  const productImage = useSelector((state) => state.productReducer.productImage)

  const userType = useSelector((state) => state.userReducer.userType)

  useEffect(() => {
    if (isModalCreateProductOpen) {
      // Reset state for creating a new product
      setProduct(null)
      dispatch(setProductImage(""))
      setComercialName("")
      setChemicalName("")
      setFunctionProduct("")
      setApplication("")
      setInputTopics([])
      setInputTable("")
      setSegmentListActive({
        agricultura: false,
        tintas_e_resinas: false,
        tratamento_de_agua: false,
        cuidados_em_casa: false,
      })
      setIsEdit(true)
    } else if (productById) {
      // Set state for editing an existing product
      setProduct(productById)
      setComercialName(productById.comercial_name || "")
      setChemicalName(productById.chemical_name || "")
      setFunctionProduct(productById.function || "")
      setApplication(productById.application || "")
      setInputTopics(() => {
        if (productById.topics && Array.isArray(productById.topics)) {
          return productById.topics.map((topic) => ({
            id: Date.now() + Math.random(),
            ...topic,
          }))
        }
        return []
      })
      setInputTable(productById.data || [])
      setSegmentListActive({
        agricultura: productById.segments.includes("agricultura"),
        tintas_e_resinas: productById.segments.includes("tintas_e_resinas"),
        tratamento_de_agua: productById.segments.includes("tratamento_de_agua"),
        cuidados_em_casa: productById.segments.includes("cuidados_em_casa"),
      })
      dispatch(setProductImage(productImageById || ""))
      setIsEdit(false) // Set isEdit to false for editing
    }
  }, [
    isModalByIdOpen,
    isModalCreateProductOpen,
    productById,
    productImageById,
    dispatch,
  ])

  const handleClickSaveProduct = async () => {
    try {
      const segments = Object.keys(segmentListActive).filter(
        (key) => segmentListActive[key]
      )
      const productEdited = {
        comercial_name: comercialName,
        chemical_name: chemicalName,
        application: application,
        function: functionProduct,
        product_enums: [
          {
            name: "segmentos",
            value: segments,
          },
        ],
        topics: inputTopics,
        data: inputTable,
      }

      let response
      if (product && !isModalCreateProductOpen) {
        response = await editProductById(product.id, productEdited, userToken)
      } else if (isModalCreateProductOpen) {
        response = await createProduct(productImage, productEdited, userToken)
      }

      if (!response) {
        throw new Error("Failed to edit product.")
      }
      return response
    } catch (error) {
      console.error("Error editing product:", error.message)
      throw error // Re-throw the error to be caught by Button component
    }
  }

  const handleDeleteProduct = async () => {
    await changeDeleteStatusProductById(productById.id, userToken)
    toggleIsOpenModal()
  }

  const handleInputTopicsChange = (value) => {
    setInputTopics(value)
  }
  const handleInputTableChange = (value) => {
    setInputTable(value)
  }

  const handleChemicalName = (event) => {
    setChemicalName(event.target.value)
  }

  const handleComercialName = (event) => {
    setComercialName(event.target.value)
  }

  const handleFunctionProduct = (event) => {
    setFunctionProduct(event.target.value)
  }

  const handleApplication = (event) => {
    setApplication(event.target.value)
  }

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  const toggleIsOpenModal = () => {
    dispatch(toggleIsModalByIdOpen(false))
    dispatch(toggleIsModalCreateProductOpen(false))
  }

  const toggleSegmentActive = (segment) => {
    setSegmentListActive((prevState) => {
      const newActiveState = !prevState[segment]
      return {
        ...prevState,
        [segment]: newActiveState,
      }
    })
  }

  if (!product && !isModalCreateProductOpen) {
    return null
  }

  return (
    <BasicModal
      key={product?.id || "create"}
      title={comercialName}
      isEdit={isEdit}
      isOpen={isModalByIdOpen || isModalCreateProductOpen}
      handleEdit={true}
      fixed
      handleModal={toggleIsOpenModal}
      toggleEdit={toggleEdit}
      maxWidth={"1000px"}
      handleDelete={handleDeleteProduct}
    >
      <Align column gap={"20px"}>
        <InputFile
          isEdit={isEdit}
          productId={productById?.id}
          userToken={userToken}
          defaultImage={productImage.data}
        />
        <SegmentIconsInput
          segmentListActive={segmentListActive}
          isEdit={isEdit}
          toggleSegmentActive={toggleSegmentActive}
        />

        <Align gap={"20px"} column>
          <InputSimple
            type="textarea"
            title="Nome Comercial"
            value={comercialName}
            isEdit={isEdit}
            maxW={"200px"}
            onChange={handleComercialName}
          />

          <InputSimple
            type="textarea"
            title="Nome Químico"
            value={chemicalName}
            isEdit={isEdit}
            maxW={"200px"}
            onChange={handleChemicalName}
          />

          <InputSimple
            type="textarea"
            title="Função"
            value={functionProduct}
            isEdit={isEdit}
            maxW={"200px"}
            onChange={handleFunctionProduct}
          />
          <InputSimple
            type="textarea"
            title="Aplicação"
            value={application}
            isEdit={isEdit}
            maxW={"200px"}
            onChange={handleApplication}
          />
          <br />
          <DynamicInputs
            type="topic"
            inputValues={inputTopics}
            isEdit={isEdit}
            onInputValuesChange={handleInputTopicsChange}
          />

          <InputTable
            values={inputTable || ""}
            isEdit={isEdit}
            onInputValuesChange={handleInputTableChange}
          />
        </Align>
      </Align>
      {userType === "admin" && isEdit && (
        <>
          <Button
            text={"Salvar"}
            onClick={handleClickSaveProduct}
            type={"primary"}
          />
          <Button
            text={"Cancelar"}
            onClick={toggleIsOpenModal}
            type={"secondary"}
          />
        </>
      )}
    </BasicModal>
  )
}
