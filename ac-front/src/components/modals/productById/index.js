import React, { useState, useEffect } from "react"
import { BasicModal } from "../../modals/basic"
import {
  InputComplex,
  Button,
  InputFile,
  DynamicInputs,
  SegmentIconsInput,
} from "../../index"
import { Align } from "../../../style"
import { useSelector, useDispatch } from "react-redux"
import {
  toggleIsModalByIdOpen,
  toggleIsModalCreateProductOpen,
} from "../../../redux/product/slice"
import api from "../../../services/ac-api"
import { InputTable } from "../../inputs/inputTable"

export const editProductById = async (id, productEdited, userToken) => {
  try {
    const response = await api.put(
      `/product/specification-tsv-format/${id}`,
      productEdited,
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

export const createProduct = async (product, userToken) => {
  try {
    const response = await api.post(
      `/product/specification-tsv-format`,
      product,
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

export function ProductModalById({ productById }) {
  const [product, setProduct] = useState(null)
  const [productTitle, setProductTitle] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [segmentListActive, setSegmentListActive] = useState({
    agricultura: false,
    tintas_e_resinas: false,
    tratamento_de_agua: false,
    cuidados_em_casa: false,
  })

  const [inputItemInTable, setInputItemInTable] = useState([])
  const [inputTopics, setInputTopics] = useState([])
  const [inputTable, setInputTable] = useState([])

  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.userReducer.userToken)
  const isModalByIdOpen = useSelector(
    (state) => state.productReducer.isModalByIdOpen
  )
  const isModalCreateProductOpen = useSelector(
    (state) => state.productReducer.isModalCreateProductOpen
  )
  const userType = useSelector((state) => state.userReducer.userType)

  useEffect(() => {
    setProduct({
      product_title: "",
      segments: [],
      item_in_table: [
        { name: "Nome Comercial", value: "" },
        { name: "Nome Químico", value: "" },
        { name: "Função", value: "" },
        { name: "Aplicação", value: "" },
      ],
      topics: [],
      data: "",
    })
    setProductTitle("")
    setSegmentListActive({
      agricultura: false,
      tintas_e_resinas: false,
      tratamento_de_agua: false,
      cuidados_em_casa: false,
    })
    setInputItemInTable([
      { id: Date.now() + Math.random(), name: "Nome Comercial", value: "" },
      { id: Date.now() + Math.random(), name: "Nome Químico", value: "" },
      { id: Date.now() + Math.random(), name: "Função", value: "" },
      { id: Date.now() + Math.random(), name: "Aplicação", value: "" },
    ])
    setInputTopics([])
    setInputTable("")
  }, [isModalCreateProductOpen])

  useEffect(() => {
    if (isModalByIdOpen && productById) {
      setProductTitle(productById.product_title)
      setInputItemInTable(() => {
        if (
          productById.item_in_table &&
          Array.isArray(productById.item_in_table)
        ) {
          return productById.item_in_table.map((topic) => ({
            id: Date.now() + Math.random(),
            ...topic,
          }))
        }
        return []
      })
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
      setProduct(productById)
    }
  }, [isModalByIdOpen, productById])

  const handleClickSaveProduct = async () => {
    try {
      const segments = Object.keys(segmentListActive).filter(
        (key) => segmentListActive[key]
      )
      const productEdited = {
        product_title: productTitle,
        segments,
        item_in_table: inputItemInTable,
        topics: inputTopics,
        data: inputTable,
      }

      let response
      if (isModalByIdOpen) {
        response = await editProductById(
          productById.id,
          productEdited,
          userToken
        )
      } else if (isModalCreateProductOpen) {
        response = await createProduct(productEdited, userToken)
      }

      if (!response) {
        throw new Error("Failed to edit product.")
      }
      return response
    } catch (error) {
      console.error("Error editing product:", error.message)
      throw error // Rethrow the error to be caught by Button component
    }
  }

  const handleDeleteProduct = async () => {
    await changeDeleteStatusProductById(productById.id, userToken)
    toggleIsOpenModal()
  }

  const handleInputItemInTableChange = (value) => {
    setInputItemInTable(value)
  }
  const handleInputTopicsChange = (value) => {
    setInputTopics(value)
  }
  const handleInputTableChange = (value) => {
    setInputTable(value)
  }

  const handleProductTitleChange = (event) => {
    const newName = event.target.value
    setProductTitle(newName)
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

  if (!product) {
    return null
  }

  return (
    <BasicModal
      key={product.id}
      title={productTitle}
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
        <InputFile isEdit={isEdit} />
        <SegmentIconsInput
          segmentListActive={segmentListActive}
          isEdit={isEdit}
          toggleSegmentActive={toggleSegmentActive}
        />

        <Align gap={"20px"} column>
          {isEdit && (
            <InputComplex
              type="text"
              value={productTitle}
              maxW={"200px"}
              onChange={handleProductTitleChange}
            />
          )}

          <DynamicInputs
            type="topic"
            inputValues={inputItemInTable}
            isEdit={isEdit}
            onInputValuesChange={handleInputItemInTableChange}
            fixed
          />

          <DynamicInputs
            type="topic"
            inputValues={inputTopics}
            isEdit={isEdit}
            onInputValuesChange={handleInputTopicsChange}
          />

          <InputTable
            values={inputTable}
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
