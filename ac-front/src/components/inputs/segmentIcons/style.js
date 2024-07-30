import styled from "styled-components"
import {
  CleanHands,
  DropPlusLess,
  Plant,
  Color,
} from "../../../assets/icons"
import { BaseIcon } from "../../../style"

const defaultColor = 'var(--accent-color)';

export const PlantIcon = styled(BaseIcon).attrs({
  as: Plant,
})`
  width: 27px;
  fill: ${(props) => (props.isActive ? `` : `var(--bg-tertiary-color)`)};
  color: red;
`

export const ColorIcon = styled(BaseIcon).attrs({
  as: Color,
})`
  width: 27px;
  fill: ${(props) => (props.isActive ? `` : `var(--bg-tertiary-color)`)};
  color: ${defaultColor};
`

export const CleanHandsIcon = styled(BaseIcon).attrs({
  as: CleanHands,
})`
  width: 27px;
  fill: ${(props) => (props.isActive ? `` : `var(--bg-tertiary-color)`)};
  color: ${defaultColor};
`

export const DropPlusLessIcon = styled(BaseIcon).attrs({
  as: DropPlusLess,
})`
  width: 27px;
  fill: ${(props) => (props.isActive ? `` : `var(--bg-tertiary-color)`)};
  color: ${defaultColor};
`