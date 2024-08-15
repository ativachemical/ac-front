import styled from "styled-components"

export const Title = styled.h3`
  font-size: 27px;
  margin: 80px 0 20px 0;
  color: var(--text-solid);
  text-align: ${(props) => (props.center ? "center" : "left")};
`

export const A = styled.a`
  font-size: ${(props) => (props.size ? `${props.size}` : "17px")};
  color: ${(props) =>
    props.color ? `${props.color}` : `var(--primary-color)`};
`

export const Text = styled.p`
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "12px"
      case "md":
        return "16px"
      case "lg":
        return "20px"
      case "xlg":
        return "24px"
      default:
        return "18px"
    }
  }};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) =>
    props.bold
      ? "var(--text-solid)"
      : props.color
      ? `${props.color}`
      : "var(--text-apresentation-color)"};
  text-align: ${(props) => (props.center ? "center" : "")};

  max-width: ${(props) => (props.maxW ? `${props.maxW}` : "none")};
  width: ${(props) => (props.maxW ? "100%" : "auto")};

  ${(props) =>
    props.responsive &&
    `
    width:200px;
    @media (max-width: 768px) {
      width:auto;
      max-width: 100%;
    }
  `}
`

export const StyledSpace = styled.div`
  height: ${(props) => (props.space ? `${props.space}px` : "0")};
`

export const StyledText = styled.div`
  /* Adicione aqui os estilos específicos para o componente StyledText */
`
