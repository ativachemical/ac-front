import styled from "styled-components"
import { Linkedin, Whatsapp, ArrowUp, Link as LinkSvg } from "../../assets/icons/index.js"

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
  display: flex;
  max-width: 900px;
  gap: 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  @media(width < 768px){
    justify-content: center;
    text-align: center;
    gap: 50px;
  }
`

export const FooterText = styled.p`
  opacity: 0.3;
  font-weight: 400;
  font-size: 20px;
  padding: 5px;
`
export const ImgLogo = styled.img`
  width: 80px;
  height: auto;
  opacity: 0.6;
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

export const Left = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: center;
  align-items: center;
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
  max-width: 200px;
  opacity: 0.9;
  gap: 20px;
  word-break: break-all;
  cursor: pointer;
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

  svg {
    width: 30px;
    height: auto;
    cursor: pointer;
  }

  @media (width < 769px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

export const WhatsappNumberIcon = styled(Whatsapp)`
  width: 18px;
  cursor: pointer;
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
  border-radius: 10px;
`
export const LinkIcon = styled(LinkSvg)`
  fill: var(--solid-color);
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
  font-size: 17px;
  color: var(--solid-color);
  opacity: 0.6;
  gap: 20px;
  cursor: pointer;

  text-decoration: underline;
  &:hover {
    color: var(--text-solid);
  }
`
