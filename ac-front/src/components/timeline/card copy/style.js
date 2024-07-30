import styled from 'styled-components'

export const Content = styled.div`
display:flex;
margin-top:20px;
gap:20px;
flex-direction:column;
`

export const Card = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    cursor:pointer;
    justify-content: center;
    opacity: ${(props) => props.isSelected ? `1` : '.4'};
    @media(width < 768px){
        max-width: 300px;
        padding: 5px 10px;
        background-color: var(--bg-secondary-color);
        border-radius:20px;
    }
`

export const group = styled.div`

`

export const Line = styled.div`
    height: 20px;
    background-color: var(--bg-secondary-color);
    width: 4px;
    border-radius: 10px;
`;

export const Flex = styled.div`
    ${(props) => (props.isSelected ? 'flex-direction:column;' : '')}
    display: flex;
    gap: 5px;
    align-items: center;
`;


export const Text = styled.div`

`

export const CardsContent  = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    
`

export const Description  = styled.div`
background-color: var(--bg-secondary-color);
padding: 20px;
border-radius:20px;
min-width: 300px;
`

export const Img = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  @media(width>768px){
    width:100%;
  }
  ${(props) => (props.isSelected ? 'width: 200px;' : '')}
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '0')};
//   clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;