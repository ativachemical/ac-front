import React from "react"
import { Align } from "../../../style"
import * as Styled from "./style"

export function SegmentIconsInput({
  segmentListActive,
  isEdit,
  toggleSegmentActive,
}) {
  const segmentToIconKey = {
    agricultura: (
      <Styled.PlantIcon
        isActive={segmentListActive.agricultura}
        onClick={() => isEdit && toggleSegmentActive("agricultura")}
      />
    ),
    tintas_e_resinas: (
      <Styled.ColorIcon
        isActive={segmentListActive.tintas_e_resinas}
        onClick={() => isEdit && toggleSegmentActive("tintas_e_resinas")}
      />
    ),
    cuidados_em_casa: (
      <Styled.CleanHandsIcon
        isActive={segmentListActive.cuidados_em_casa}
        onClick={() => isEdit && toggleSegmentActive("cuidados_em_casa")}
      />
    ),
    tratamento_de_agua: (
      <Styled.DropPlusLessIcon
        isActive={segmentListActive.tratamento_de_agua}
        onClick={() => isEdit && toggleSegmentActive("tratamento_de_agua")}
      />
    ),
  }

  return (
    <Align justify={"center"} gap={"15px"}>
      {isEdit ? (
        <>
          {segmentToIconKey.agricultura}
          {segmentToIconKey.tintas_e_resinas}
          {segmentToIconKey.cuidados_em_casa}
          {segmentToIconKey.tratamento_de_agua}
        </>
      ) : (
        Object.keys(segmentListActive).map(
          (segment) =>
            segmentListActive[segment] && (
              <div key={segment}>{segmentToIconKey[segment]}</div>
            )
        )
      )}
    </Align>
  )
}
