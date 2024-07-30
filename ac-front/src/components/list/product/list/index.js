import React, { useState, useEffect, useCallback } from "react"
import * as Styled from "./style"
import { ProductCard } from "../card"
import { Gap, ScrollX } from "../../../../style"
import { Pagination } from "../../../pagination"
import { useSelector, useDispatch } from "react-redux"
import { ProductModalById, SearchInput } from "../../../index"
import { toggleIsModalByIdOpen } from "../../../../redux/product/slice"
import api from "../../../../services/ac-api"

export const getProductList = async (segments, isActive, search) => {
  try {
    const requestData = {
      segments,
      is_active: isActive,
      search,
    }
    const response = await api.post("/product/filter", requestData)
    return response.data // Adjust according to your API response structure
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/specification-tsv-format/${id}`)
    return response.data // Ajuste conforme a estrutura do seu retorno de API
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export function ProductList({ type = "table" }) {
  //, itemById = productListById
  const [products, setProducts] = useState([])
  const [productById, setProductById] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()
  const segments = useSelector((state) => state.productReducer.segments)
  const [initialLoad, setInitialLoad] = useState(true)

  const refreshProductList = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getProductList(segments, true, searchQuery)
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching product list:", error)
      setLoading(false)
    }
  }, [segments,searchQuery])

  useEffect(() => {
    if (initialLoad) {
      refreshProductList()
      setInitialLoad(false)
    }
  }, [initialLoad, refreshProductList])

  const handleClickItem = async (itemId) => {
    try {
      const data = await getProductById(itemId)
      dispatch(toggleIsModalByIdOpen())
      setProductById(data)
    } catch (error) {
      console.error("Error fetching product details:", error)
    }
  }

  const handleInputChange = (value) => {
    setSearchQuery(value)
  }

  const isManualPagination = useSelector(
    (state) => state.productReducer.isManualPagination
  )
  const totalPages = useSelector((state) => state.productReducer.totalPages)
  const skipsPerPage = useSelector((state) => state.productReducer.skipsPerPage)
  return (
    <>
      <SearchInput onSearchClick={refreshProductList} onInputChange={handleInputChange} />
      {loading ? (
        <div>Loading...</div>
      ) : !products ? (
        <div>Error loading data.</div>
      ) : (
        <>
          <ProductModalById productById={productById} />
          <Styled.Content>
            {type === "table" && (
              <ScrollX>
                <Styled.Table>
                  <thead>
                    <tr>
                      {products.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.items.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => handleClickItem(item.id)}
                      >
                        {item.rows.map((row, index) => (
                          <td key={index}>
                            {Array.isArray(row) ? (
                              <Gap value="10px">
                                {row.map((segment, idx) => (
                                  <React.Fragment key={idx}>
                                    {segment === "agricultura" && (
                                      <Styled.PlantIcon />
                                    )}
                                    {segment === "tintas_e_resinas" && (
                                      <Styled.ColorIcon />
                                    )}
                                    {segment === "cuidados_em_casa" && (
                                      <Styled.CleanHandsIcon />
                                    )}
                                    {segment === "tratamento_de_agua" && (
                                      <Styled.DropPlusLessIcon />
                                    )}
                                  </React.Fragment>
                                ))}
                              </Gap>
                            ) : (
                              row
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Styled.Table>
              </ScrollX>
            )}
            {type === "card" && (
              <>
                {products.items.map((item, index) => (
                  <ProductCard key={index} list={item} />
                ))}
              </>
            )}
            {isManualPagination && (
              <Pagination
                totalPages={totalPages}
                jumpPerPage={skipsPerPage}
                onPageChange={(page) =>
                  console.log("Mudou para a página", page)
                }
              />
            )}
          </Styled.Content>
        </>
      )}
    </>
  )
}
