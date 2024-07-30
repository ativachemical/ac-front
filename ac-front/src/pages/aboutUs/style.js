import styled from 'styled-components'

export const Img = styled.img`
@media(width < 769px){
  width: 100%;
}
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  height: ${(props) => (props.height ? `${props.height}` : 'auto')};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}` : '0')};
`;

export const FlexItems = styled.div`
  display:flex;
  gap:15px;
  @media(width < 769px){
    flex-direction: column;
  }
  flex-direction:${(props) => (props.imgFirst)? 'row':'row-reverse'}
`;

export const Gap = styled.div`
  display:flex;
  gap:${(props) => (props.value)? `${props.value}`:'10px'};
  flex-direction:column;
`;