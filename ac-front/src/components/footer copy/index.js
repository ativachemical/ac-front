import React from "react";
import {WhiteLogo} from '../../assets/imgs'
import * as Styled from './style.js';

export function Footer() {

  function openMaps(){
    window.open('https://maps.app.goo.gl/xP7PK49xX7S4vwtg6', '_blank');
  };

  function openLinkedin(){
    window.open('https://www.linkedin.com/company/ativa-chemical/', '_blank');
  };

  function openWhatsapp(numberChoice) {
    const phoneNumber1 = '5511913991412';
    const phoneNumber2 = '5511912721893';
    const message = encodeURIComponent('Olá, tudo certo?');

    function openUrl(phoneNumber,message){
      const whatsappWebUrl = `https://wa.me/${phoneNumber}?&text=${message}`;
      window.open(whatsappWebUrl, '_blank');
    }
  
    switch (numberChoice) {
      case 1:
        openUrl(phoneNumber1, message);
        return;
      case 2:
        openUrl(phoneNumber2, message);
        return;
      default:
        return; // Encerra a função se a escolha for inválida
    }
  }
  
  return (
    <Styled.Footer id="footer">
      <Styled.ContentFooter>
        <Styled.ImgLogo src={WhiteLogo}/>
        <Styled.MiddleContent>
          <Styled.FooterTitle>Contato</Styled.FooterTitle>
          <Styled.MiddleRight>
            <Styled.Bold>Ativa Chemical Ltda</Styled.Bold>
            <Styled.Flex>
              <Styled.Bold>Enredeço:</Styled.Bold>
              <Styled.Text onClick={openMaps}>R. Funchal, 538, 2º A - Itaim Bibi, São Paulo - SP, 04551-060</Styled.Text>
            </Styled.Flex>
          <Styled.Flex>
            <Styled.Bold>Telefone:</Styled.Bold>
            <div>
              <Styled.Flex>
                <Styled.Text onClick={() => openWhatsapp(1)}>(11) 9 1399-1412</Styled.Text>
                <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(1)}/>
              </Styled.Flex>
              <Styled.Flex>
              <Styled.Text onClick={() => openWhatsapp(2)}>(11) 9 1272-1893</Styled.Text>
                <Styled.WhatsappNumberIcon onClick={() => openWhatsapp(2)}/>
              </Styled.Flex>
            </div>
          </Styled.Flex>
          </Styled.MiddleRight>
        </Styled.MiddleContent>
        <Styled.RightContent>
        <a href="#header">
          <Styled.ArrowUpIcon href="#header"/>
        </a>
          <Styled.Gap>
            <Styled.WhatsappIcon onClick={() => openWhatsapp(2)}/>
            <Styled.LinkedinIcon onClick={openLinkedin}/>
          </Styled.Gap>
        </Styled.RightContent>
        </Styled.ContentFooter>
    </Styled.Footer>
  )
}
