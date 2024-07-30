import styled from "styled-components"
import {
  CleanHands,
  DropPlusLess,
  Plant,
  Color,
  Close,
  Less,
  Plus,
} from "../../../../assets/icons"
import { BaseIcon } from "../../../../style"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  ${({ type }) => {
    switch (type) {
      case "table":
        return `
        align-items:center;
        gap:50px;
        @media(width < 768px){
            padding: 0 25px 0 25px;
        }
        `
      case "card":
        return ``
      default:
        return ``
    }
  }}
`

export const SpaceTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseIcon = styled(BaseIcon).attrs({
  as: Close,
})`
  fill: var(--accent-color);
`

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate; /* Alterado de collapse para separate para suportar border-radius */
  border-spacing: 0; /* Remove o espaço entre as células para bordas contínuas */
  margin: 20px 0 0 0;
  
  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 8px;
    color: var(--text-apresentation-color);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  td {
    cursor: pointer;
  }

  th {
    background-color: var(--bg-secondary-color);
    color: var(--text-solid);
    font-size:17px;
  }

  tr:nth-child(even) {
    background-color: var(--bg-secondary-color);
  }

  tr:nth-child(odd) {
    background-color: var(--bg-quaternary-color); /* Cor vermelha para a última linha */
  }

  tr:hover {
    background-color: var(--bg-quinary-color);
  }

  /* Border-radius para a primeira linha */
  tr:first-child th:first-child {
    border-top-left-radius: 10px; /* Ajuste o valor conforme necessário */
  }

  tr:first-child th:last-child {
    border-top-right-radius: 10px; /* Ajuste o valor conforme necessário */
  }

  /* Border-radius para a última linha */
  tr:last-child td:first-child {
    border-bottom-left-radius: 10px; /* Ajuste o valor conforme necessário */
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px; /* Ajuste o valor conforme necessário */
  }
`

const AccessibleText = styled.span`
  position: absolute;
  top: -9999px; /* Mova o texto para fora da tela, mas ainda acessível */
`

export const PlantIcon = styled(BaseIcon).attrs({
  as: Plant,
})`
  width: 22px;
`

export const ColorIcon = styled(BaseIcon).attrs({
  as: Color,
})`
  width: 22px;
  /* Adicione outros estilos conforme necessário */
  /* Sobreponha o texto acessível */
  position: relative;
  &:hover ${AccessibleText} {
    top: 0; /* Mova o texto acessível para a posição visível quando o ícone é hover */
  }
`

export const CleanHandsIcon = styled(BaseIcon).attrs({
  as: CleanHands,
})`
  width: 22px;
`
export const DropPlusLessIcon = styled(BaseIcon).attrs({
  as: DropPlusLess,
})`
  width: 22px;
`

export const LessIcon = styled(BaseIcon).attrs({
  as: Less,
})`
  fill: var(--bg-color);
  min-width: 25px;
  height:25px;
  border-radius:5px;
  background-color:var(--danger-color);
`

export const PlusIcon = styled(BaseIcon).attrs({
  as: Plus,
})`
  fill: var(--bg-color);
  max-width: 36px;
  height:25px;
  border-radius:5px;
  background-color:var(--accent-color);
`


export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 150px;
  align-items: center;
`