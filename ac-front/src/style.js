import styled from "styled-components"

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0 20vw 0 20vw;
  @media (width < 768px) {
    padding: 0 25px 0 25px;
  }
`

export const Img = styled.img`
  transition: opacity 0.5s ease;
  user-select: none;
  @media (width < 769px) {
    width: 100%;
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}` : "100%")};
  }
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "auto")};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}` : "0"};

  margin: ${(props) => (props.margin ? `${props.margin}` : "auto")};
  ${(props) =>
    props.shadow ? `filter: drop-shadow(0px 0px 6px #2f334f8c);` : ""};
`

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;
  justify-content: center;
  align-items: center;
  padding: 0 20vw 0 20vw;
  @media (width < 768px) {
    padding: 0 25px 0 25px;
  }
`

export const Hr = styled.div`
  opacity: 0.3;
  background: ${(props) => (props.bg ? `${props.width}` : "var(--text-solid)")};
  border-radius: 20px;
  height: ${(props) => (props.height ? `${props.height}` : "2px")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "0")};
`

export const BaseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  fill: var(--text-solid);
  width: 30px;
  // filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
  cursor: pointer;
`

export const Gap = styled.div`
  display: flex;
  gap: ${(props) => (props.value ? `${props.value}` : "20px")};
  @media (width<768px) {
    ${(props) => (props.wrapResponsive ? `flex-direction:column;` : "")};
    ${(props) => (props.wrapResponsive ? `gap:10px;` : "")};
  }
`

export const Align = styled.div`
  display: flex;
  gap: ${(props) => (props.gap ? `${props.gap}` : "0")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  ${(props) => (props.column ? `flex-direction:column;` : "")};
  ${(props) => (props.alignEnd ? `align-items:end;` : "")};
  ${(props) => (props.alignCenter ? `align-items:center;` : "")};
  ${(props) => {
    switch (props.justify) {
      case "between":
        return `justify-content: space-between;`;
      case "around":
        return `justify-content: space-around;`;
      case "center":
        return `justify-content: center;`;
      default:
        return ``; // or any default value you want
    }
  }};

  @media (max-width: 768px) {
    ${(props) => (props.responsive ? `flex-direction: column;` : "")};
  }
`;

export const ScrollX = styled.div`
  width: 100%;
  overflow-x: auto;
`

// export const PlantIcon = styled(BaseIcon).attrs({
//   as: Plant,
// })`
// `;
