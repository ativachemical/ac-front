import styled from "styled-components"
import { Less, Plus } from "../../../assets/icons"
import { BaseIcon } from "../../../style"

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

export const LessIcon = styled(BaseIcon).attrs({
  as: Less,
})`
  fill: var(--bg-color);
  min-width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: var(--danger-color);
`

export const PlusIcon = styled(BaseIcon).attrs({
  as: Plus,
})`
  fill: var(--bg-color);
  max-width: 36px;
  height: 25px;
  border-radius: 5px;
  background-color: var(--accent-color);
`
