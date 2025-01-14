import React, { useState, useEffect, useCallback } from "react"
import * as Styled from "./style"
import { ProductCard } from "../card"
import { Gap, ScrollX } from "../../../../style"
import { Pagination } from "../../../pagination"
import { useSelector, useDispatch } from "react-redux"
import { DownloadButton, DownloadProductCardList, DownloadProductModal, ProductModalById, SearchInput } from "../../../index"
import { toggleIsModalByIdOpen } from "../../../../redux/product/slice"
import api from "../../../../services/ac-api"
import { getLocalStorage } from "../../../../utils"

const list = [
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
];

export const getProductDownloadHistorySearch = async (search, userToken) => {
  try {
    const requestData = {
      search: search,
    }
    const response = await api.post("/product/download-history",requestData, {
      headers: {
        Authorization: `Bearer ${userToken}`, // Passa o token JWT no cabeçalho
      },
    })
    return response.data // Adjust according to your API response structure
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const getProductList = async (segments, isActive, search) => {
  try {
    const requestData = {
      search,
      segments,
      limit_string: 150,
      columns: [
        "nome_comercial",
        "nome_quimico",
        "funcao",
        "aplicacao",
        "segmentos",
        "download"
      ],
      is_inactived: false,
      is_deleted: getLocalStorage("product_filter_is_deleted") || false,
    }
    const response = await api.post("/product/filter", requestData)
    return response.data // Adjust according to your API response structure
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/${id}`)
    return response.data // Ajuste conforme a estrutura do seu retorno de API
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export const getProductImageById = async (id) => {
  try {
    const response = await api.get(`/product/image-supabase-base64/${id}`)
    return response.data // Ajuste conforme a estrutura do seu retorno de API
  } catch (error) {
    console.error("Error making the API request:", error)
  }
}

export function ProductList() {
  const [products, setProducts] = useState([])
  const [productById, setProductById] = useState(null)
  const [productImageById, setProductImageById] = useState(null)
  const [isDownloadProductModalOpen, setDownloadProductModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()
  const segments = useSelector((state) => state.productReducer.segments)
  const [initialLoad, setInitialLoad] = useState(true)
  const [getProductId, setProductId] = useState(0)
  const [getTypeList, setTypeList] = useState('table')

  const userToken = useSelector((state) => state.userReducer.userToken)

  const refreshProductList = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getProductList(segments, false, searchQuery)
      setProducts(data)
      setLoading(false)
      setTypeList('table')
    } catch (error) {
      console.error("Error fetching product list:", error)
      setLoading(false)
    }
  }, [segments, searchQuery])

  const fetchProductDownloadHistory = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProductDownloadHistorySearch(searchQuery, userToken);
      setProducts(data);
      console.log(data);
      setLoading(false);
      setTypeList('download_history');
    } catch (error) {
      console.error("Error fetching product list:", error);
      setLoading(false);
    }
  }, [searchQuery, userToken]);
  
  

  useEffect(() => {
    if (initialLoad) {
      refreshProductList()
      setInitialLoad(false)
    }
  }, [initialLoad, refreshProductList])

  const handleClickItem = async (itemId) => {
    try {
      const data = await getProductById(itemId)
      const dataImage = await getProductImageById(itemId)
      setProductById(data)
      setProductImageById(dataImage)
      dispatch(toggleIsModalByIdOpen())
    } catch (error) {
      console.error("Error fetching product details:", error)
    }
  }

  const handleInputChange = (value) => {
    setSearchQuery(value)
  }

  const toggleModalDownloadProduct = useCallback((e, productId) => {
    if (e) e.stopPropagation(); // Evita que o clique se propague
    setProductId(productId); // Atualiza o ID do produto antes de abrir o modal
    setDownloadProductModalOpen((prevState) => !prevState); // Alterna o estado do modal
    console.log("toggleModalDownloadProduct", productId);
  }, []);

  const isManualPagination = useSelector(
    (state) => state.productReducer.isManualPagination
  )
  const totalPages = useSelector((state) => state.productReducer.totalPages)
  const skipsPerPage = useSelector((state) => state.productReducer.skipsPerPage)
  return (
    <>
      <SearchInput
        onProductSearchClick={refreshProductList}
        onProductDownloadHistorySearchClick={fetchProductDownloadHistory}
        onInputChange={handleInputChange}
      />

      {/* modals */}
      <DownloadProductModal isOpen={isDownloadProductModalOpen} handleModal={toggleModalDownloadProduct} productId={getProductId}/>
      <ProductModalById
        productById={productById}
        productImageById={productImageById}
      />
      {/* modals */}
      {loading ? (
        <div>Carregando...</div>
      ) : !products ? (
        <div>Estamos ajustando, mas logo estará de volta!</div>
      ) : (
        <>
          <Styled.Content>
            {getTypeList === "table" && (
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
                              (() => {
                                switch (true) {
                                  // Verifica se é um array de strings
                                  case typeof row[0] === 'string':
                                    return (
                                      <Gap value="10px">
                                        {row.map((segment, idx) => (
                                          <React.Fragment key={idx}>
                                            {(() => {
                                              switch (segment) {
                                                case "agricultura":
                                                  return <Styled.PlantIcon />;
                                                case "tintas_e_resinas":
                                                  return <Styled.ColorIcon />;
                                                case "cuidados_em_casa":
                                                  return <Styled.CleanHandsIcon />;
                                                case "tratamento_de_agua":
                                                  return <Styled.DropPlusLessIcon />;
                                                default:
                                                  return null;
                                              }
                                            })()}
                                          </React.Fragment>
                                        ))}
                                      </Gap>
                                    );

                                  // Verifica se é um array de objetos no formato { type: string, link: string }
                                  case typeof row[0] === 'object' && row[0] !== null:
                                    return (
                                      <Styled.ContentLinkDownload>
                                        {row.map((download, idx) => (
                                          <DownloadButton 
                                            idx={idx} 
                                            onClick={(e) => toggleModalDownloadProduct(e, item.id)}
                                            text={download.type.toUpperCase()}
                                          />
                                        ))}
                                      </Styled.ContentLinkDownload>
                                    );

                                  default:
                                    return null;
                                }
                              })()
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
            {getTypeList === "card" && (
              <>
                {products.items.map((item, index) => (
                  <ProductCard key={index} list={item} />
                ))}
              </>
            )}
            {getTypeList === "download_history" && (
              <DownloadProductCardList list={products}/>
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
