import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Linkedin, Whatsapp, ArrowUp, Link as LinkSvg, Location } from "../../assets/icons/index.js"

export const Footer = styled.footer`
  background: var(--bg-theme-color);
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media(width < 768px){
    text-align: center;
  }
`

export const ContentFooter = styled.footer`
  max-width: 2000px;
  width: 100%;
  gap: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 10vw 0 10vw;
  text-align: center;

  @media(width<768px){
    justify-content: center;
    text-align: center;
    gap: 50px;
  }
`

export const FooterText = styled.p`
  opacity: 0.3;
  font-weight: 400;
  font-size: 20px;
`
export const ImgLogo = styled.img`
  width: 80px;
  margin-bottom:10px;
  margin-left:10px;
  height: auto;
  opacity: 0.6;
  @media(width<768px){
    margin-bottom:20px;
    margin-left:0;
  }
`
export const ImageContent = styled.div`
  width: 100%;
  display: flex;
  align-items:flex-start;

  @media(width<768px){
    justify-content:center;
  }
`

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`

export const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Flex = styled.div`
  display: flex;
  gap: 5px;
  align-items: baseline;
`

export const AlignLinksCenter = styled.div`
  display: flex;
  margin-top:10px;
flex-direction:column;
align-items:center;
gap:5px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftFirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;

  @media(width<768px){
    flex-direction:column;
    align-items:center;
    gap:20px;
  }
`

export const LeftFistItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
`

export const FooterTitle = styled.div`
  font-weight: 600;
  color: var(--solid-color);
  font-size: 22px;
`

export const Bold = styled.p`
  font-weight: 600;
  color: var(--solid-color);
  font-size: 17px;
  @media(width < 768px){
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 16px;
  color: var(--solid-color);
  max-width: 200px;
  opacity: 0.9;
  gap: 20px;
`

export const Link = styled.p`
  font-size: 17px;
  color: var(--solid-color);
  max-width: ${(props) => (props.noWrap ? "none" : "200px")};
  width: 100%;
  opacity: 0.9;
  gap: 5px;
  word-break: break-word;
  cursor: pointer;
  display: flex;
  align-items:center;

  white-space: ${(props) => (props.noWrap ? "nowrap" : "normal")};

  @media( width < 768px){
    max-width: none;
    text-align: center;
  }

  &:hover {
    text-decoration: underline;
  }
`
export const NavLinkItem = styled(NavLink)`
  font-size: 17px;
  color: var(--solid-color);
  max-width: ${(props) => (props.noWrap ? "none" : "200px")};
  width: 100%;
  height:24.4px;
  opacity: 0.9;
  gap: 10px;
  word-break: break-word;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:center;

  white-space: ${(props) => (props.noWrap ? "nowrap" : "normal")};

  @media( width < 768px){
    max-width: none;
    text-align: center;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-end;

  /* svg {
    width: 30px;
    height: auto;
    cursor: pointer;
  } */

  @media (width < 769px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

export const WhatsappNumberIcon = styled(Whatsapp)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: var(--solid-color);
`

export const LocationIcon = styled(Location)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: var(--solid-color);
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 15px;
  height: 15px;
  fill: var(--solid-color);
`

export const LinkedinIcon = styled(Linkedin)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: var(--solid-color);
`

export const ArrowUpIcon = styled(ArrowUp)`
  background: var(--solid-color);
  fill: var(--text-color);
  border-radius: 10px;
  width:25px;
`
export const LinkIcon = styled(LinkSvg)`
  fill: var(--solid-color);
  width:14px;
`

export const LinkVoltarAoTopo = styled.a`
  background: var(--solid-color);
  fill: var(--text-color);
  border-radius: 10px;
  justify-content:center;
  align-items:center;
  display:flex;
  color: var(--text-color);
  font-size:14px;
  margin-left:20px;
`

export const GapIcons = styled.div`
  display: flex;
  gap: 5px;
  @media(width < 768px){
    justify-content: center;
  }
`

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const LastLine = styled.a`
  font-size: 14px;
  color: var(--solid-color);
  opacity: 0.6;
  gap: 20px;
  cursor: pointer;

  text-decoration: underline;
  &:hover {
    color: var(--text-solid);
  }
`
export const LinkFelipe = styled.div`
  display: flex;
  gap:5px;
  width:100%;
  padding:5px;
  justify-content:center;
  @media(width<768px){
    margin-top:20px;
  }
`