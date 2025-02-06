import React, { useEffect, useState, useCallback } from "react"
import * as Styled from "./style"
import { Text } from "../../text"
import { Align } from "../../../style"
import { Button } from "../../buttons/button"
import { InputSimple } from "../../inputs/inputSimple"
import { Input } from "../../inputs/input"
import api from "../../../services/ac-api"
import { RecaptchaV2 } from "../../recaptcha/recaptchaV2"

export const requestSendEmailDownloadProduct = async (name, company, phoneNumber, email, productId, recaptchaToken, recaptchaClientIp) => {
  try {
    // Monta o objeto com os dados da requisição
    const requestData = {
      username: name,
      company: company,
      phone_number: phoneNumber,
      email: email,
      recaptchaToken: recaptchaToken,
      recaptchaClientIp: recaptchaClientIp
    };

    // Faz a requisição POST
    const response = await api.post(`product/download/${productId}?download_type=pdf`, requestData);

    // Retorna a resposta para quem chamou a função
    return response;
  } catch (error) {
    // Captura e loga erros para ajudar no debug
    console.error('Erro ao enviar email de download do produto:', error.message);

    // Lança o erro para o chamador tratar
    throw error;
  }
};

export function DownloadProductModal({
  title = "Encaminhar download por email",
  isOpen = false,
  text = "Para realizar o download informe alguns dados necessários com o email a ser enviado:",
  disableUserSelect = false,
  maxWidth = "400px",
  productId,
  handleModal,
}) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);
  const [alertMessage, setAlertMessage] = useState();
  const [getProductId, setProductId] = useState(productId);
  const [isLoading, setIsHideForm] = useState(false); // Estado de carregamento
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [clientIp, setClientIp] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    productId: productId,
    recaptchaToken: recaptchaToken,
    recaptchaClientIp: clientIp,
  });

  const handleVerify = (token) => {
    console.log("Token do reCAPTCHA recebido:", token); // Verifique se o token está correto
    setRecaptchaToken(token); // Atualiza o estado com o token
  };

  useEffect(() => {
    setProductId(getProductId);
  }, [getProductId]);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        setClientIp(data.ip);
      } catch (error) {
        console.error("Erro ao obter o IP:", error);
      }
    };

    fetchIp();
  }, []);

  useEffect(() => {
    setIsOpenModal(isOpen);
    if (isOpen || isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isOpenModal]);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  // Funções de validação
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Aceita números internacionais com o formato XX (DDD) 9XXXX-XXXX ou XX 9XXXX-XXXX sem o símbolo '+'
    const phoneRegex = /^\d{1,4}\s?(\(?\d{2,5}\)?[\s\-]?)?(\d{4,5})[\s\-]?\d{4}$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length <= 15;
  };

  const validateName = (text) => {
    // Função para verificar sequências de letras repetidas
    const hasRepeatedLetters = (word) => /([a-zA-Z])\1{2,}/.test(word);

    // Divide o texto em palavras
    const words = text.trim().split(/\s+/);

    // Valida:
    // 1. O texto tem mais de uma palavra
    // 2. Cada palavra tem pelo menos 3 caracteres
    // 3. Não contém sequências de letras repetidas consecutivas
    // 4. As palavras não podem ser compostas apenas de letras repetidas
    return (
      words.length > 1 &&
      words.every((word) =>
        word.length >= 3 &&
        !hasRepeatedLetters(word) &&
        new Set(word).size > 1
      )
    );
  };



  const validateCompany = (text) => {
    const invalidWords = ["test", "teste", "empresa", "example", "demo", "company", "Enterprise"];

    // Função para verificar sequências de letras iguais consecutivas
    const hasRepeatedLetters = (input) => /([a-zA-Z])\1{2,}/.test(input);

    // Verifica se o texto:
    // 1. Tem mais de 2 caracteres
    // 2. Não está na lista de palavras inválidas
    // 3. Não contém sequências de letras iguais consecutivas
    return (
      text.length > 2 &&
      !invalidWords.includes(text.toLowerCase()) &&
      !hasRepeatedLetters(text)
    );
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    handleModal();
  };

  const sendEmailDownloadProduct = async () => {
    try {
      setIsHideForm(false);
      const { name, company, phoneNumber, email } = formData;

      const updatedFormData = {
        ...formData,
        recaptchaToken: recaptchaToken,  // Atualizando com o token correto
        recaptchaClientIp: clientIp,     // Atualizando com o IP do cliente
      };

      // Validações
      if (!validateName(name)) {
        setAlertMessage({ message: "Um nome e sobrenome válido por favor", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        setIsHideForm(false);
        return;
      }
      if (!validateCompany(company)) {
        setAlertMessage({ message: "Uma empresa válida por favor", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        setIsHideForm(false);
        return;
      }
      if (!validatePhone(phoneNumber)) {
        setAlertMessage({
          message: "Telefone inválido. O formato deve ser XX (DDD) 9XXXX-XXXX ou XX 9XXXX-XXXX",
          type: "error",
        });
        setTimeout(() => setAlertMessage(""), 7000);
        return;
      }
      if (!validateEmail(email)) {
        setAlertMessage({ message: "Email inválido", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        setIsHideForm(false);
        return;
      }
      if (!recaptchaToken) {
        setAlertMessage({ message: "reCAPTCHA inválido", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        setIsHideForm(false);
        return;
      }


      setIsHideForm(true);
      const response = await requestSendEmailDownloadProduct(
        updatedFormData.name,
        updatedFormData.company,
        updatedFormData.phoneNumber,
        updatedFormData.email,
        productId,
        updatedFormData.recaptchaToken,
        updatedFormData.recaptchaClientIp
      );
      if (response.status === 204 || response.status === 201) {
        setAlertMessage({ message: "Seu email chegará em breve!", type: "success" });
        setTimeout(() => toggleModal(), 7000);
        setTimeout(() => setIsHideForm(false), 7000);
      } else {
        setAlertMessage({ message: "Erro ao enviar email, tente novamente.", type: "error" });
        setTimeout(() => toggleModal(), 7000);
        setTimeout(() => setIsHideForm(false), 7000);
      }
    } catch (error) {
      setAlertMessage({ message: "Erro ao enviar email, tente mais tarde", type: "error" });
      console.error("Erro na requisição sendEmailDownloadProduct:", error.message);
    } finally {
      setTimeout(() => setAlertMessage(""), 7000);
      setTimeout(() => setIsHideForm(false), 7000);
    }
  };

  return (
    <Styled.BackgroundOutsideModal isOpen={isOpenModal}>
      <Styled.Modal isOpen={isOpenModal} disableUserSelect={disableUserSelect} maxWidth={maxWidth}>
        <Styled.SpaceTop>
          <Text text={title} bold color="var(--text-solid)" size="lg" />
          <Align column alignEnd gap="10px" width="auto">
            <Styled.CloseIcon onClick={toggleModal} />
          </Align>
        </Styled.SpaceTop>
        <Text text={text} />
        <Styled.FormContent>
          {!isLoading && <>
            <Input
              type="text"
              title="Nome Completo"
              placeholder="Nome Exemplo"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              title="Empresa"
              placeholder="Empresa Exemplo"
              value={formData.company}
              name="company"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              title="Telefone"
              placeholder="55 11 12345-6789"
              value={formData.phoneNumber}
              name="phoneNumber"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              title="Email"
              placeholder="email@example.com.br"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
            <RecaptchaV2 onVerify={handleVerify} />
          </>}
        </Styled.FormContent>

        {alertMessage && (
          <Styled.AlertTextContent>
            <Styled.AlertText type={alertMessage.type}>{alertMessage.message}</Styled.AlertText>
          </Styled.AlertTextContent>
        )}

        <Align gap="20px" justify="center">
          <Button text="Enviar" onClick={() => sendEmailDownloadProduct()} type="primary" disabled={isLoading || !recaptchaToken} />
          <Button text="Cancelar" onClick={toggleModal} type="secondary" disabled={isLoading} />
        </Align>
      </Styled.Modal>
    </Styled.BackgroundOutsideModal>
  );
}
