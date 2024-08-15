import React, { useState, useEffect } from "react"
import * as Styled from "./style"
import { Text } from "../../text"
import { Gap } from "../../../style"

export function InputSimple({
  text,
  title = 'title',
  type,
  isEdit,
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
    <Styled.Content maxW={'100%'}>
      {type === "textarea" ? (
        <Gap wrapResponsive>
          {isEdit ? (
          <>
            <Text text={`${title}:`} bold maxW={"200px"} />
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
          </>
          ):(
            <>
            <Text text={`${title}:`} bold responsive/>
            <Text text={value} maxW={'100%'}/>
          </>
          )}
        </Gap>
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
