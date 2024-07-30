import React, { useState } from "react"
import * as Styled from "./style"
import { Text } from "../../index"

export function RangeInput({
  text = "Range Input",
  initialValue,
  min = 5,
  max = 100,
  onChange,
}) {
  const [value, setValue] = useState(initialValue || Math.floor(max / 2)) // Valor inicial do range ajustado para estar no meio do intervalo

  const handleRangeChange = (event) => {
    setValue(event.target.value) // Atualiza o valor do range conforme o usuário move o controle
    if (onChange) {
      onChange(event.target.value) // Chama a função onChange passando o novo valor
    }
  }

  return (
    <Styled.Content>
      <Styled.Range
        value={value}
        min={min}
        max={max}
        onChange={handleRangeChange}
      />
      <Text text={`${value} ${text}`} size={"md"} />
    </Styled.Content>
  )
}
