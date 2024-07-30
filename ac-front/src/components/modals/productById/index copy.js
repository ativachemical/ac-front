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
import { toggleIsModalByIdOpen } from "../../../redux/product/slice"
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

export function ProductModalById({ productById }) {
  const [product, setProduct] = useState(productById)
  const [productTitle, setProductTitle] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  const [inputItemInTable, setInputItemInTable] = useState(() => {
    if (productById.item_in_table && Array.isArray(productById.item_in_table)) {
      return productById.item_in_table.map((topic) => ({
        id: Date.now() + Math.random(),
        ...topic,
      }))
    }
    return []
  })
  const [inputTopics, setInputTopics] = useState(() => {
    if (productById.topics && Array.isArray(productById.topics)) {
      return productById.topics.map((topic) => ({
        id: Date.now() + Math.random(),
        ...topic,
      }))
    }
    return []
  })
  const [inputTable, setInputTable] = useState(productById.data)

  const [dynamicInputsData, setDynamicInputsData] = useState({
    item_in_table: inputItemInTable,
    topics: inputTopics,
  })
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.userReducer.userToken)
  const isModalByIdOpen = useSelector(
    (state) => state.productReducer.isModalByIdOpen
  )
  const userType = useSelector((state) => state.userReducer.userType)

  const handleClickEditProduct = async () => {
    const productEdited = {
      product_title: "test",
      segments: [
        "agricultura",
        "tintas_e_resinas",
        "tratamento_de_agua",
        "cuidados_em_casa",
      ],
      item_in_table: inputItemInTable,
      topics: inputTopics,
      data: inputTable,
    }
    await editProductById(productById.id, productEdited, userToken)
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
  
  useEffect(() => {
    console.log('productById changed:', productById);
    if (productById) {
      setProductTitle(productById.product_title)
      setDynamicInputsData({
        item_in_table: inputItemInTable,
        topics: inputTopics,
      })
    }
  }, [productById])

  const handleProductTitleChange = (event) => {
    const newName = event.target.value
    setProductTitle(newName)
  }

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  const toggleIsOpenModal = () => {
    dispatch(toggleIsModalByIdOpen())
  }

  if (!productById) {
    return null
  }

  return (
    <BasicModal
      key={productById.id}
      title={productTitle}
      isEdit={isEdit}
      isOpen={isModalByIdOpen}
      handleEdit={true}
      fixed
      handleModal={toggleIsOpenModal}
      toggleEdit={toggleEdit}
      maxWidth={"1000px"}
    >
      <Align column gap={"20px"}>
        <InputFile isEdit={isEdit} />
        <SegmentIconsInput list={productById.segments} isEdit={isEdit} />

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
            onClick={handleClickEditProduct}
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
