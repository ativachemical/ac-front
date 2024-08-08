export const createProduct = async (product, imageFile, userToken) => {
  const formData = new FormData()

  // Adiciona a imagem ao FormData
  if (imageFile) {
    formData.append("file", imageFile)
  }

  // Adiciona o JSON do produto como uma string
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
    throw error // Re-throw the error to handle it outside if needed
  }
}

const createProductDto = {
  is_deleted: false,
  product_title: "Cloreto de Sódio - Swagger specification Tsv",
  data: "Header1\tHeader2\tHeader3\tHeader4\r\nrow1\trow1\trow1\trow1\r\nrow2\trow2\trow2\trow2",
  comercial_name: "Cloreto de Sódio",
  application: "Aplicação",
  chemical_name: "Nome químico",
  function: "Função",
  product_enums: [
    {
      name: "segmentos",
      value: [
        "agricultura",
        "tintas_e_resinas",
        "tratamento_de_agua",
        "cuidados_em_casa",
      ],
    },
  ],
  is_inactived: false,
  topics: [
    {
      name: "Pureza",
      value: "A pureza do produto pode variar entre 90% e 95%",
    },
    {
      name: "Densidade",
      value: "A densidade é de 1.32 g/cm³ a 20°C",
    },
    {
      name: "Solubilidade",
      value:
        "Solúvel em água a uma concentração de aproximadamente 360g/L a 20°C.",
    },
    {
      name: "Composicao Química",
      value: "Cl- (íon cloreto): 60.66%, Na+ (íon sódio): 39.34%",
    },
  ],
}
