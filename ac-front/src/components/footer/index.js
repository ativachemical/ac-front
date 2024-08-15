import React from "react"
import { WhiteLogo } from "../../assets/imgs"
import * as Styled from "./style.js"

export function Footer() {
  function openMaps() {
    window.open("https://maps.app.goo.gl/xP7PK49xX7S4vwtg6", "_blank")
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/company/ativa-chemical/", "_blank")
  }

  function openWhatsapp(numberChoice) {
    const phoneNumber1 = "5511913991412"
    const phoneNumber2 = "5511912721893"
    const message = encodeURIComponent("Olá, tudo certo?")

    function openUrl(phoneNumber, message) {
      const whatsappWebUrl = `https://wa.me/${phoneNumber}?&text=${message}`
      window.open(whatsappWebUrl, "_blank")
    }

    switch (numberChoice) {
      case 1:
        openUrl(phoneNumber1, message)
        return
      case 2:
        openUrl(phoneNumber2, message)
        return
      default:
        return // Encerra a função se a escolha for inválida
    }
  }

  return (
    <>
      <Styled.Footer id="footer">
        <Styled.ContentFooter>
          <Styled.Left>
            <Styled.ImgLogo src={WhiteLogo} />
            <Styled.Bold>Ativa Chemical Brasil</Styled.Bold>
            <br />
            <Styled.Link onClick={openMaps}>
              R. Funchal, 538, 2º A - Itaim Bibi, São Paulo - SP, 04551-060
            </Styled.Link>
            <div>
              <Styled.Flex>
                <Styled.Link onClick={() => openWhatsapp(1)}>
                  (11) 9 1399-1412
                </Styled.Link>
                <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(1)} />
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Link onClick={() => openWhatsapp(2)}>
                  (11) 9 1272-1893
                </Styled.Link>
                <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(2)} />
              </Styled.Flex>
              <Styled.Link>ativachemical@gmail.com</Styled.Link>
            </div>
          </Styled.Left>

          <Styled.MiddleContent>
            <Styled.MiddleRight>
              <Styled.FooterTitle>Fornecendo Soluções</Styled.FooterTitle>
              <Styled.Link>Sobre nós</Styled.Link>
              <Styled.Link>Notícias</Styled.Link>
            </Styled.MiddleRight>
          </Styled.MiddleContent>

          <Styled.RightContent>
            <Styled.Gap>
              <Styled.FooterTitle>Entre em</Styled.FooterTitle>
              <Styled.FooterTitle>Contato conosco</Styled.FooterTitle>
              <Styled.Text>Siga-nos nas redes sociais</Styled.Text>
              <Styled.GapIcons>
                <Styled.WhatsappIcon onClick={() => openWhatsapp(2)} />
                <Styled.LinkedinIcon onClick={openLinkedin} />
              </Styled.GapIcons>
            </Styled.Gap>

            <a href="#header">
              <Styled.ArrowUpIcon href="#header" />
            </a>
          </Styled.RightContent>
        </Styled.ContentFooter>
        <Styled.LastLine href="https://www.linkedin.com/in/felipe-sugisawa/">
          created by Felipe S.
        </Styled.LastLine>
      </Styled.Footer>
    </>
  )
}
