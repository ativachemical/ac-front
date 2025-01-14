import styled from "styled-components"
import {
    Download,
} from "../../../assets/icons"
import { BaseIcon } from "../../../style"

export const DownloadButtonContent = styled.button`
  padding: 3px;
  background: var(--bg-tertiary-color);
  border-radius:5px;
  font-size:14px;
  font-weight:600;
  display: flex;
  align-items:center;
  justify-content:center;
  color:var(--text-solid);
  border: 2px solid var(--bg-tertiary-color);
  gap:3px;
  width: fit-content;
  height: fit-content;
  cursor:pointer;
`

export const DownloadIcon = styled(BaseIcon).attrs({
    as: Download,
})`
    fill: var(--text-solid);
    width: fit-content;
    height:20px;
  `