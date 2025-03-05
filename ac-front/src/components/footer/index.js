import React from "react"
import { WhiteLogo } from "../../assets/imgs"
import * as Styled from "./style.js"

export function Footer() {
  function openMapsSaoPaulo() {
    // R. Funchal, 538, 2º A - Itaim Bibi, São Paulo - SP, 04551-060 
    window.open("https://maps.app.goo.gl/xP7PK49xX7S4vwtg6", "_blank")
  }

  function openMapsUruguay() {
    // Zabala 1422, 11000 Montevideo, Departamento de Montevideo, Uruguai
    window.open("https://maps.app.goo.gl/CZZAtX2GzwNBKARc9", "_blank")
  }

  function openMapsChina() {
    window.open("https://maps.app.goo.gl/AgvUyegMVJnZDzsJA", "_blank")
  }

  function openLinkedin() {
    window.open("https://www.linkedin.com/company/ativa-chemical/", "_blank")
  }

  function openLinkedinFelipe() {
    window.open("https://www.linkedin.com/in/felipe-sugisawa/", "_blank")
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

  function openEmail() {
    window.open("mailto:ativachemical@ativachemical.com");
  }


  return (
    <Styled.Footer id="footer">
      <Styled.ContentFooter>
        <Styled.ImageContent>

        <Styled.ImgLogo src={WhiteLogo} />
        </Styled.ImageContent>
        <Styled.LeftFirstBlock>
          <Styled.LeftFistItem>
            <Styled.FooterTitle translate="no">Ativa Chemical</Styled.FooterTitle>

            <Styled.Link onClick={openMapsSaoPaulo} translate="no" >
              <Styled.LocationIcon onClick={openMapsSaoPaulo} />
              São Paulo, SP
            </Styled.Link>

            <Styled.Link onClick={openMapsUruguay} translate="no" >
              <Styled.LocationIcon onClick={openMapsUruguay} />
              Montevideo, Uruguay
            </Styled.Link>

            <Styled.Link onClick={openMapsChina} translate="no" >
              <Styled.LocationIcon onClick={openMapsChina} />
              Shenzhen, China
            </Styled.Link>
          </Styled.LeftFistItem>

          <Styled.MiddleContent>
            <Styled.MiddleRight>
              <Styled.FooterTitle>Fornecendo Soluções</Styled.FooterTitle>
              <Styled.NavLinkItem to="/">Sobre nós</Styled.NavLinkItem>
              <Styled.NavLinkItem to="/products">Produtos</Styled.NavLinkItem>
              <Styled.NavLinkItem to="/services">Serviços</Styled.NavLinkItem>
            </Styled.MiddleRight>
          </Styled.MiddleContent>

          <Styled.RightContent>
            <Styled.Gap>
              <Styled.FooterTitle>Entre em Contato conosco</Styled.FooterTitle>

              {/* <Align column alignCenter> */}
              <Styled.AlignLinksCenter>
                <Styled.Flex>
                  <Styled.Link onClick={() => openWhatsapp(1)}>
                    <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(1)} />
                    (11) 9 1399-1412
                  </Styled.Link>
                </Styled.Flex>
                <Styled.Flex>
                  <Styled.Link onClick={() => openWhatsapp(2)}>
                    <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(2)} />
                    (11) 9 1272-1893
                  </Styled.Link>
                </Styled.Flex>
                <Styled.Flex>
                  <Styled.Link translate="no" onClick={() => openLinkedin()}>
                    <Styled.LinkedinIcon onClick={() => openLinkedin()} />
                    ativa-chemical
                  </Styled.Link>
                </Styled.Flex>
                <Styled.Flex>
                  <Styled.Link noWrap translate="no" onClick={() => openEmail()}>ativachemical@ativachemical.com</Styled.Link>
                  <Styled.LinkVoltarAoTopo href="#header">
                    <Styled.ArrowUpIcon href="#header" />
                  </Styled.LinkVoltarAoTopo>
                </Styled.Flex>
              </Styled.AlignLinksCenter>

              {/* <Styled.GapIcons>
              <Styled.LinkedinIcon onClick={openLinkedin} />
            </Styled.GapIcons> */}
            </Styled.Gap>

          </Styled.RightContent>
        </Styled.LeftFirstBlock>
      </Styled.ContentFooter>

      <Styled.LinkFelipe>
        <Styled.LinkIcon onClick={openLinkedinFelipe} />
        <Styled.LastLine href="https://www.linkedin.com/in/felipe-sugisawa/" target="_blank">
          created by Felipe S.
        </Styled.LastLine>

      </Styled.LinkFelipe>
    </Styled.Footer>
  )
}
