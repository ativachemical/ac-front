import React, { useEffect, useState } from "react"
import * as Styled from "./style"
import { Text } from "../../index"

export function CheckBox({
  text = ["checkbox"],
  value,
  type = "default",
  icon1,
  icon2,
  onClick,
}) {
  const [isCheck, setIsCheck] = useState(value)

  const handleGapClick = () => {
    setIsCheck(!isCheck)
    if (onClick) {
      onClick(!isCheck)
    }
  }

  useEffect(() => {
    setIsCheck(value)
  }, [value])

  let displayText
  if (Array.isArray(text)) {
    displayText = isCheck ? text[0] : text[1]
  } else {
    displayText = text
  }

  return (
    <Styled.Content value={"7px"} onClick={handleGapClick}>
      {type === "default" && (
        <>
          <Styled.CheckBox
            checked={isCheck}
            onChange={(e) => setIsCheck(e.target.checked)}
          />
          <Text text={displayText} size={"md"} />
        </>
      )}
      {type === "icon" && (
        <>
          {isCheck ? icon1 : icon2}
          <Text text={displayText} size={"md"} />
        </>
      )}
    </Styled.Content>
  )
}
