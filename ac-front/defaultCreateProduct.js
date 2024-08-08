item_in_table_keys = ["Nome Comercial", "Função", "Aplicação", "Nome Químico"]

test = {
  product_title: "",
  segments: [],
  item_in_table: [
    {
      name: "Nome Comercial",
      value: "",
    },
    {
      name: "Nome Químico",
      value: "",
    },
    {
      name: "Função",
      value: "",
    },
    {
      name: "Aplicação",
      value: "",
    },
  ],
  topics: [],
  data: "",
}

test = {
  product_title: "",
  segments: [],
  comercial_name:"",
  chemical_name:"",
  function:"",
  application:"",
  topics: [
    {
      name: "Topico1",
      value: "TopicoValue1",
    },
    {
      name: "Topico2",
      value: "TopicoValue2",
    },
  ],
  data: "",
}

getProductById = {
  "headers": [
    "Nome Comercial",
    "Nome Químico",
    "Função",
    "Aplicação",
    "Segmentos"
  ],
  "items": [
    {
      "id": 11,
      "is_inactived": false,
      "rows": [
        "Nome Comercial Value",
        "Nome Químico Value",
        "Função Value",
        "Aplicação Value",
        [
          "agricultura",
          "tintas_e_resinas",
          "tratamento_de_agua",
          "cuidados_em_casa"
        ]
      ]
    },
    {
      "id": 12,
      "is_inactived": false,
      "rows": [
        "Nome Comercial Value",
        "Nome Químico Value",
        "Função Value",
        "Aplicação Value",
        [
          "agricultura",
          "tintas_e_resinas",
          "cuidados_em_casa"
        ]
      ]
    },
  ]
}

// const test = [
//   {
//     "Nome Comercial",
//     product.comercial_name
//   },
//   {
//       "Nome Químico",
//       product.chemical_name
//   },
//   {
//     "Função",
//     product.function
//   },
//   {
//     "Aplicação",
//     product.application
//   },
//   {
//     "Segmentos",
//     product.product_values.filter(v => v.product_key.name === 'Segmentos').map(v => v.product_enum_key.key),
//   },
// ]
