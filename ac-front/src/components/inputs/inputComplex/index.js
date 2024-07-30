import React, { useState, useEffect } from "react"
import * as Styled from "./style"

export function InputComplex({
  text,
  type,
  size,
  value,
  onChange,
  placeholder,
  onKeyDown,
  error,
  maxW,
  height,
  name,
}) {
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    if (value || type === "date") {
      setIsFocus(true)
    } else {
      setIsFocus(false)
    }
  }, [value, type])

  const handleInputBlur = (event) => {
    if (isFocus && event.target.value === "") {
      setIsFocus(false)
    }
    if (type === "date" && event.target.value === "") {
      setIsFocus(true)
    }
  }

  return (
    <Styled.Content maxW={maxW}>
      {type === "textarea" ? (
        <Styled.Textarea
          required=""
          size={size}
          id={text}
          value={value}
          error={error}
          name={name}
          autoComplete="off"
          onFocus={() => setIsFocus(true)}
          onBlur={handleInputBlur}
          onChange={onChange}
          isFocus={isFocus}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          height={height}
        />
      ) : (
        <Styled.Input
          required=""
          type={type}
          size={size}
          id={text}
          value={value}
          error={error}
          name={name}
          autoComplete="off"
          onFocus={() => setIsFocus(true)}
          onBlur={handleInputBlur}
          onChange={onChange}
          isFocus={isFocus}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
      )}
      <Styled.Label htmlFor={text} isFocus={isFocus}>
        {text}
      </Styled.Label>
    </Styled.Content>
  )
}
