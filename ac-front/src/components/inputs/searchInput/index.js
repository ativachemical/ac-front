import React, { useState } from "react"
import * as Styled from "./style.js"
// import { Hr } from "../../../style.js"
import { BasicModal, Button, CheckBox } from "../../index.js"
// import { RangeInput } from "../../index.js"
import {
  // setSkipsPerPage,
  toggleIsAllSegmentsChecked,
  // toggleIsManualPagination,
  toggleIsModalCreateProductOpen,
  updateSegmentList,
} from "../../../redux/product/slice.js"
import { useDispatch, useSelector } from "react-redux"

export function SearchInput({
  placeholder = "Buscar",
  onSearchClick,
  onInputChange,
}) {
  const dispatch = useDispatch()
  // const isManualPagination = useSelector(
  //   (state) => state.productReducer.isManualPagination
  // )
  // const skipsPerPage = useSelector((state) => state.productReducer.skipsPerPage)
  const segments = useSelector((state) => state.productReducer.segments)
  const isAllChecked = useSelector((state) => state.productReducer.isAllChecked)
  const userType = useSelector((state) => state.userReducer.userType)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  // const handleCheckBoxChange = () => {
  //   dispatch(toggleIsManualPagination())
  // }

  // const handleSetSkipsPerPage = (value) => {
  //   dispatch(setSkipsPerPage(value))
  // }

  const handleCheckAllSegments = () => {
    dispatch(toggleIsAllSegmentsChecked())
  }

  const handleIsCheckSegment = (segmentName) => {
    // return isIncludedSegment(segmentName)
    return segments.includes(segmentName)
  }

  const handleUpdateSegmentList = (value) => {
    dispatch(updateSegmentList(value))
  }

  const handleFilterClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleFilterIconClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  const toggleIsOpenModal = () => {
    dispatch(toggleIsModalCreateProductOpen(true))
  }
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onInputChange(value);
  };

  return (
    <>
      <Styled.Center>
        <Styled.All>
          <Styled.Content>
            <Styled.Input
              placeholder={placeholder}
              onChange={handleInputChange}
              value={searchInput}
            />
            <Button
              icon={<Styled.FilterIcon />}
              onClick={handleFilterIconClick}
              type={"lite"}
            />

            <Button
              icon={<Styled.SearchIcon />}
              onClick={onSearchClick}
              type={"lite"}
            />

            {userType === "admin" && (
              <Button
                icon={<Styled.PlusIcon />}
                onClick={toggleIsOpenModal}
                type={"lite"}
              />
            )}
          </Styled.Content>
        </Styled.All>
        <BasicModal
          title={"Filtros"}
          isOpen={isModalOpen}
          handleModal={handleFilterClick}
          disableUserSelect
        >
          <CheckBox
            text="Todos"
            value={isAllChecked}
            onClick={() => handleCheckAllSegments()}
          />
          <CheckBox
            text="Agro"
            value={handleIsCheckSegment("agricultura")}
            onClick={() => handleUpdateSegmentList("agricultura")}
          />
          <CheckBox
            text="Tintas & Resinas"
            value={handleIsCheckSegment("tintas_e_resinas")}
            onClick={() => handleUpdateSegmentList("tintas_e_resinas")}
          />
          <CheckBox
            text="Home care"
            value={handleIsCheckSegment("cuidados_em_casa")}
            onClick={() => handleUpdateSegmentList("cuidados_em_casa")}
          />
          <CheckBox
            text="Tratamento de água"
            value={handleIsCheckSegment("tratamento_de_agua")}
            onClick={() => handleUpdateSegmentList("tratamento_de_agua")}
          />
          {/* <Hr margin={"10px 0 10px 0"} />
          <CheckBox
            text={["Listagem: lista", "Listagem: tabela"]}
            type="icon"
            icon1={<Styled.ListIcon />}
            icon2={<Styled.TableIcon />}
          />
          <CheckBox
            text={["Paginação: manual", "Paginação: automática"]}
            type="icon"
            icon1={<Styled.SettingsIcon />}
            icon2={<Styled.RefreshIcon />}
            onClick={handleCheckBoxChange}
            value={isManualPagination}
          />
          {isManualPagination && (
            <>
              <RangeInput
                text="Pulos por página"
                min={3}
                max={100}
                onChange={(value) => handleSetSkipsPerPage(value)}
                initialValue={skipsPerPage}
              />
            </>
          )}
          <RangeInput text="Itens por página" max={200} /> */}
        </BasicModal>
      </Styled.Center>
    </>
  )
}
