import React from "react"
import {
  DefaultImg,
  Agro,
  WaterTreatment,
  PaintsAndResins,
  HomeAndIndustrialCleaning,
} from "../../../assets/imgs"
import * as Styles from "./style"
import { Text } from "../../text"
import { useDispatch } from "react-redux"
import { justOneInSegmentList } from "../../../redux/product/slice"

const values = [
  {
    img: Agro,
    title: "Agro",
    filterRedirectProducts: "agricultura",
    icon: <Styles.PlantIcon />,
  },
  {
    img: PaintsAndResins,
    title: "Tintas & Resinas",
    filterRedirectProducts: "tintas_e_resinas",
    icon: <Styles.ColorIcon />,
  },
  {
    img: HomeAndIndustrialCleaning,
    title: "Home & Industrial Cleaning",
    filterRedirectProducts: "cuidados_em_casa",
    icon: <Styles.CleanHandsIcon />,
  },
  {
    img: WaterTreatment,
    title: "Tratamento de Água",
    filterRedirectProducts: "tratamento_de_agua",
    icon: <Styles.DropPlusLessIcon />,
  },
]

export function ProductCardItem({
  img = DefaultImg,
  title = "Product name",
  icon = <Styles.PlantIcon />,
  linkName = "Saiba mais",
  filterRedirectProducts = "",
}) {
  const dispatch = useDispatch()

  const handleRedirectToProductWidthFilter = (value) => {
    dispatch(justOneInSegmentList(value))
    window.location.href = `/products`
  }

  return (
    <Styles.ContentCard
      onClick={() => handleRedirectToProductWidthFilter(filterRedirectProducts)}
    >
      <div style={{ position: "relative" }}>
        <Styles.Img src={img} alt="Product" width="100%" borderRadius="20px" />
        {icon}
      </div>
      <Styles.TextCard>
        <Text bold center text={title} />
        <Text link text={linkName} />
      </Styles.TextCard>
    </Styles.ContentCard>
  )
} 

export function ProductDescription() {
  return (
    <Styles.ContentCards>
      {values.map((product, index) => (
        <ProductCardItem
          key={index}
          img={product.img}
          title={product.title}
          icon={product.icon}
          imgPage={product.imgPage}
          filterRedirectProducts={product.filterRedirectProducts}
        />
      ))}
    </Styles.ContentCards>
  )
}
