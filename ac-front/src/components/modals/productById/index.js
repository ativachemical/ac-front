import React, { useState, useEffect, useCallback } from "react"
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

    return response?.data
  } catch (error) {
    console.error(
      "Error making the API request:",
      error.response?.data || error.message
    )
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

    return response?.data
  } catch (error) {
    console.error(
      "Error making the API request:",
      error.response?.data || error.message
    )
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

    return response?.data
  } catch (error) {
    console.error(
      "Error making the API request:",
      error.response?.data || error.message
    )
    throw error
  }
}

export function ProductModalById({ productById, productImageById }) {
  const [product, setProduct] = useState(productById)
  const [formData, setFormData] = useState({
    product: null,
    comercialName: "",
    chemicalName: "",
    functionProduct: "",
    application: "",
    inputTopics: [],
    inputTable: "",
    image: "",
  })

  const [segmentListActive, setSegmentListActive] = useState({
    agricultura: false,
    tintas_e_resinas: false,
    tratamento_de_agua: false,
    cuidados_em_casa: false,
  })

  const [isEdit, setIsEdit] = useState(false)
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

  const resetForm = useCallback(() => {
    setFormData({
      product: null,
      comercialName: "",
      chemicalName: "",
      functionProduct: "",
      application: "",
      inputTopics: [],
      inputTable: "",
    })
    setSegmentListActive({
      agricultura: false,
      tintas_e_resinas: false,
      tratamento_de_agua: false,
      cuidados_em_casa: false,
    })
    dispatch(setProductImage(""))
  }, [dispatch])

  // Atualize o estado `product` sempre que `productById` mudar
  useEffect(() => {
    setProduct(productById)
  }, [productById])

  // Atualize o `formData` sempre que `product` mudar
  useEffect(() => {
    if (isModalCreateProductOpen) {
      resetForm()
      dispatch(setProductImage(""))
      setIsEdit(true)
    } else if (isModalByIdOpen && product) {
      setFormData({
        product: product,
        comercialName: product.comercial_name || "",
        chemicalName: product.chemical_name || "",
        functionProduct: product.function || "",
        application: product.application || "",
        inputTopics:
          product.topics?.map((topic) => ({
            id: Date.now() + Math.random(),
            ...topic,
          })) || [],
        inputTable: product.data || [],
      })

      setSegmentListActive({
        agricultura: product.segments.includes("agricultura"),
        tintas_e_resinas: product.segments.includes("tintas_e_resinas"),
        tratamento_de_agua: product.segments.includes("tratamento_de_agua"),
        cuidados_em_casa: product.segments.includes("cuidados_em_casa"),
      })

      dispatch(setProductImage(productImageById))
      setIsEdit(false)
    }
  }, [
    isModalByIdOpen,
    isModalCreateProductOpen,
    product,
    productImageById,
    dispatch,
    resetForm,
  ])

  const handleClickSaveProduct = async () => {
    try {
      const segments = Object.keys(segmentListActive).filter(
        (key) => segmentListActive[key]
      )

      const productEdited = {
        comercial_name: formData.comercialName,
        chemical_name: formData.chemicalName,
        application: formData.application,
        function: formData.functionProduct,
        product_enums: [
          {
            name: "segmentos",
            value: segments,
          },
        ],
        topics: formData.inputTopics,
        data: formData.inputTable,
      }

      let response
      if (formData.product && !isModalCreateProductOpen) {
        response = await editProductById(
          formData.product.id,
          productEdited,
          userToken
        )
      } else if (isModalCreateProductOpen) {
        response = await createProduct(productImage, productEdited, userToken)
        resetForm()
      }

      if (!response) {
        throw new Error("Failed to edit product.")
      }
      return response
    } catch (error) {
      console.error("Error editing product:", error.message)
      throw error
    }
  }

  const handleDeleteProduct = async () => {
    await changeDeleteStatusProductById(formData.product.id, userToken)
    toggleCloseModal()
  }

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }, [])

  const handleInputTopicsChange = useCallback((value) => {
    setFormData((prevState) => ({
      ...prevState,
      inputTopics: value,
    }))
  }, [])

  const handleInputTableChange = useCallback((value) => {
    setFormData((prevState) => ({
      ...prevState,
      inputTable: value,
    }))
  }, [])

  const toggleEdit = useCallback(() => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }, [])

  const toggleCloseModal = useCallback(() => {
    dispatch(toggleIsModalByIdOpen(false))
    dispatch(toggleIsModalCreateProductOpen(false))
    resetForm()
  }, [dispatch, resetForm])

  const toggleSegmentActive = useCallback((segment) => {
    setSegmentListActive((prevState) => ({
      ...prevState,
      [segment]: !prevState[segment],
    }))
  }, [])

  const handleFileChange = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }))
  }

  if (!formData.product && !isModalCreateProductOpen) {
    return null
  }

  return (
    <BasicModal
      key={formData.product?.id || "create"}
      title={formData.comercialName}
      isEdit={isEdit}
      isOpen={isModalByIdOpen || isModalCreateProductOpen}
      handleEdit={true}
      fixed
      handleModal={toggleCloseModal}
      toggleEdit={toggleEdit}
      maxWidth={"1000px"}
      handleDelete={handleDeleteProduct}
    >
      <Align column gap={"50px"}>
        <Align gap={"40px"} responsive margin="25px 0 0 0">
          <Align column gap={"20px"} width="initial">
            <InputFile
              isEdit={isEdit}
              productId={formData.product?.id}
              onChange={handleFileChange}
              userToken={userToken}
              defaultImage={productImage?.data}
            />
            <SegmentIconsInput
              segmentListActive={segmentListActive}
              isEdit={isEdit}
              toggleSegmentActive={toggleSegmentActive}
            />
          </Align>

          <Align gap={"20px"} column>
            <InputSimple
              type="textarea"
              title="Nome Comercial"
              value={formData.comercialName}
              name="comercialName"
              isEdit={isEdit}
              maxW={"200px"}
              onChange={handleInputChange}
            />

            <InputSimple
              type="textarea"
              title="Nome Químico"
              value={formData.chemicalName}
              name="chemicalName"
              isEdit={isEdit}
              maxW={"200px"}
              onChange={handleInputChange}
            />

            <InputSimple
              type="textarea"
              title="Função"
              value={formData.functionProduct}
              name="functionProduct"
              isEdit={isEdit}
              maxW={"200px"}
              onChange={handleInputChange}
            />

            <InputSimple
              type="textarea"
              title="Aplicação"
              value={formData.application}
              name="application"
              isEdit={isEdit}
              maxW={"200px"}
              onChange={handleInputChange}
            />
          </Align>
        </Align>

        <Align gap={"20px"} column>
          <DynamicInputs
            inputValues={formData.inputTopics}
            isEdit={isEdit}
            onChange={handleInputTopicsChange}
          />

          <InputTable
            inputValue={formData.inputTable}
            isEdit={isEdit}
            onChange={handleInputTableChange}
          />
        </Align>

        {userType === "admin" && isEdit && (
          <Button
            text={"Salvar"}
            onClick={handleClickSaveProduct}
            type={"primary"}
          />
        )}
      </Align>
    </BasicModal>
  )
}
