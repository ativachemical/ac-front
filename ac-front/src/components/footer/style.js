import styled from 'styled-components';
import {Linkedin, Whatsapp, ArrowUp} from '../../assets/icons/index.js'

export const Footer = styled.footer`
background: var(--bg-theme-color);
margin-top:100px;
display:flex;
align-items:center;
justify-content:center;
`;

export const ContentFooter = styled.footer`
display: flex;
width:900px;
gap:20px;
justify-content: space-between;
flex-wrap:wrap;
padding:20px;
`;

export const FooterText = styled.p`
  opacity:.3;
  font-weight:400;
  font-size: 20px;
  padding: 5px;
`;
export const ImgLogo = styled.img`
width:80px;
height:auto;
opacity: 0.6;
`

export const MiddleContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:10px;
`

export const MiddleRight = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
`

export const Flex = styled.div`
display: flex;
gap: 5px;
align-items: baseline;
`;

export const Left = styled.div`
display: flex;
gap: 5px;
align-items: baseline;
flex-direction:column;
`;

export const FooterTitle = styled.div`
  font-weight: 600;
  color: var(--solid-color);
  font-size: 22px;
`;

export const Bold = styled.p`
    font-weight: 600;
    color: var(--solid-color);
    font-size: 17px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--solid-color);
  max-width:200px;
  opacity:.9;
  gap:20px;
`;

export const Link = styled.p`
  font-size: 17px;
  color: var(--solid-color);
  max-width:200px;
  opacity:.9;
  gap:20px;
  cursor:pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RightContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:20px;
  align-items: flex-end;
  
  svg{
    width:30px;
    height:auto;
    cursor:pointer;
  }

  @media(width < 769px){
    display:flex;
    justify-content:flex-end;
    width: 100%;
  }
`

export const WhatsappNumberIcon = styled(Whatsapp)`
width: 18px;
cursor:pointer;
fill: var(--solid-color);
`

export const WhatsappIcon = styled(Whatsapp)`
fill: var(--solid-color);
`

export const LinkedinIcon = styled(Linkedin)`
fill: var(--solid-color);
`

export const ArrowUpIcon = styled(ArrowUp)`
background: var(--solid-color);
fill: var(--text-color);
border-radius:10px;
`

export const GapIcons = styled.div`
  display:flex;
  gap:5px;
`

export const Gap = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
`