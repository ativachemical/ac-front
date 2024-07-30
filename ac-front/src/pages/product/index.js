import React, { useState } from "react"
import {
  Footer,
  Header,
  Text,
  ProductList,
} from "../../components/index"
import { PageContent } from "../../style"
import {
} from "../../assets/imgs"


export function Product() {
  const [selectedItem,] = useState("/products")
  return (
    <div>
      <Header selectedItem={selectedItem} />
      <PageContent>
        <Text text="Lista de Produtos" title />
        <ProductList/>
      </PageContent>
      <Footer />
    </div>
  )
}
