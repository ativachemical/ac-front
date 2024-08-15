import React from "react"
import * as Styled from "./style"

export function Text({
  id,
  text,
  size,
  title = false,
  space,
  bold,
  link = false,
  href,
  center = false,
  color,
  maxW,
  responsive,
  responsiveW,
}) {
  if (title) {
    return (
      <Styled.Title id={id} size={size} center={center}>
        {text}
      </Styled.Title>
    )
  }
  if (link) {
    return (
      <Styled.A id={id} size={size} href={href} color={color}>
        {text}
      </Styled.A>
    )
  }

  if (Array.isArray(text)) {
    return (
      <Styled.StyledText>
        {text.map((paragraph, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Styled.StyledSpace space={space} />}
            <Styled.Text id={id} bold={bold} color={color} maxW={maxW}>
              {paragraph}
            </Styled.Text>
          </React.Fragment>
        ))}
      </Styled.StyledText>
    )
  }

  return (
    <Styled.Text
      id={id}
      size={size}
      bold={bold}
      center={center}
      color={color}
      maxW={maxW}
      responsive={responsive}
      responsiveW={responsiveW}
    >
      {text}
    </Styled.Text>
  )
}
