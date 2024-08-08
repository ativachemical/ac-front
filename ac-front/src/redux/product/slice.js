import { createSlice } from "@reduxjs/toolkit"
import { getLocalStorage, setLocalStorage } from "../../utils"

const initialState = {
  segments: getLocalStorage("product_filter_segments") || ["agricultura", "tintas_e_resinas", "tratamento_de_agua", "cuidados_em_casa"],
  renderType: "Table",
  itemsPerPage: 97,
  skipsPerPage: 3,
  isManualPagination: false,
  isAllChecked: getLocalStorage("product_filter_segments_is_all_checked"),
  totalPages: 120,
  isModalByIdOpen: false,
  isModalCreateProductOpen: false,
  productImage: "",
}

const allSegments = ["agricultura", "tintas_e_resinas", "tratamento_de_agua", "cuidados_em_casa"]

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleIsAllSegmentsChecked: (state) => {
      state.isAllChecked = !state.isAllChecked
      if (state.isAllChecked) {
        state.segments = allSegments
      } else {
        state.segments = []
      }
      setLocalStorage("product_filter_segments", state.segments)
      setLocalStorage("product_filter_segments_is_all_checked", state.isAllChecked)
    },
    setListType: (state, action) => {
      state.renderType = action.payload
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload
    },
    setSkipsPerPage: (state, action) => {
      state.skipsPerPage = Math.max(3, Math.min(100, action.payload))
    },
    toggleIsManualPagination: (state) => {
      state.isManualPagination = !state.isManualPagination
    },
    updateSegmentList: (state, action) => {
      const productName = action.payload
      const index = state.segments.indexOf(productName)
      if (index !== -1) {
        state.segments.splice(index, 1)
      } else {
        state.segments.push(productName)
      }
      state.isAllChecked = allSegments.every(segment => state.segments.includes(segment))
      setLocalStorage("product_filter_segments", state.segments)
      setLocalStorage("product_filter_segments_is_all_checked", state.isAllChecked)
    },
    isIncludedSegment: (state, action) => {
      return state.segments.includes(action.payload)
    },
    getIsAllChecked: (state) => {
      return state.segments.length === allSegments.length
    },
    getIsModalByIdOpen: (state) => {
      return state.isModalByIdOpen
    },
    getIsModalCreateProductOpen: (state) => {
      return state.isModalByIdOpen
    },
    toggleIsModalByIdOpen: (state, action) => {
      state.isModalByIdOpen = action.payload !== undefined ? action.payload : !state.isModalByIdOpen
    },
    toggleIsModalCreateProductOpen: (state, action) => {
      state.isModalCreateProductOpen = action.payload !== undefined ? action.payload : !state.isModalCreateProductOpen
    },
    setProductImage: (state, action) => {
      state.productImage = action.payload // Novo reducer para atualizar `productImage`
    },
    getProductImage: (state) => {
      return state.productImage
    },
  },
})

export const {
  toggleIsAllSegmentsChecked,
  setListType,
  setItemsPerPage,
  setSkipsPerPage,
  toggleIsManualPagination,
  updateSegmentList,
  isIncludedSegment,
  getIsAllChecked,
  toggleIsModalByIdOpen,
  getIsModalByIdOpen,
  toggleIsModalCreateProductOpen,
  getIsModalCreateProductOpen,
  setProductImage,
  getProductImage,
} = productSlice.actions

export default productSlice.reducer
