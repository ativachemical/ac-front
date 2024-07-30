import React, { useState } from "react"
import * as Styles from "./style"
import { Align } from "../../../style"

export function Button({
  background,
  text,
  borderColor,
  size,
  onClick,
  secondary = false,
  icon,
  type,
  color,
  response,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [buttonType, setButtonType] = useState(type)
  const [, setError] = useState(null)

  const handleClick = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await onClick()
    } catch (err) {
      setButtonType("error")
      const timer = setTimeout(() => {
        setButtonType(type)
      }, 2000)

      return () => clearTimeout(timer)
    } finally {
      setIsLoading(false)
      if (response < 200 || response >= 300) {
        setButtonType("error")
        const timer = setTimeout(() => {
          setButtonType(type)
        }, 2000)

        return () => clearTimeout(timer)
      }
    }
  }

  return (
    <Styles.Button
      secondary={secondary}
      background={background}
      borderColor={borderColor}
      size={size}
      onClick={isLoading ? null : handleClick}
      disabled={isLoading}
      type={buttonType} // Use buttonType instead of type here
      color={color}
    >
      {isLoading ? (
        <Styles.ContentIcon type={buttonType}>
          <Styles.LoadingIcon type={buttonType} />
        </Styles.ContentIcon>
      ) : (
        <Align gap={"4px"} alignCenter justify={"center"}>
          {icon && (
            <Styles.ContentIcon type={buttonType}>{icon}</Styles.ContentIcon>
          )}
          {text && <span>{text}</span>}
        </Align>
      )}
    </Styles.Button>
  )
}
