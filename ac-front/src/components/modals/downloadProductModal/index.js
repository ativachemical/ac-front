import React, { useEffect, useState, useCallback } from "react"
import * as Styled from "./style"
import { Text } from "../../text"
import { Align } from "../../../style"
import { Button } from "../../buttons/button"
import { InputSimple } from "../../inputs/inputSimple"
import { Input } from "../../inputs/input"
import api from "../../../services/ac-api"



// export const sendEmailDownloadProduct = async (name, company, telephone, email, downloadLink) => {
//   try {
//     const requestData = {
//       name: name,
//       company: company,
//       telephone: telephone,
//       email: email,
//     }

//     // Envia a requisição POST
//     const response = await api.post(`${downloadLink}`, requestData);

//     return response.data;
//   } catch (error) {
//     console.error('Erro na requisição sendEmailDownloadProduct:', error.message);
//   }
// }


export function DownloadProductModal({
  title = "Encaminhar download por email",
  isOpen = false,
  text = "Para realizar o download informe alguns dados necessários com o email a ser enviado:",
  disableUserSelect = false,
  maxWidth = "400px",
  downloadLink,
  handleModal,
}) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen)
  const [alertMessage, setAlertMessage] = useState() // Estado para mensagem de erro

  useEffect(() => {
    setIsOpenModal(isOpen);
    if (isOpen || isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isOpenModal]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telephone: "",
    email: "",
  });

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
    setIsOpenModal(!isOpenModal)
    handleModal()
  }

  const sendEmailDownloadProduct = async (downloadLink) => {
    try {
      const { name, company, telephone, email } = formData;

      // Validações
      if (!validateName(name)) {
        setAlertMessage({ message: "Um nome e sobrenome válido por favor", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        return; // Interrompe o fluxo
      }
      if (!validateCompany(company)) {
        setAlertMessage({ message: "Uma empresa válida por favor", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        return; // Interrompe o fluxo
      }
      if (!validatePhone(telephone)) {
        setAlertMessage({
          message: "Telefone inválido. O formato deve ser XX (DDD) 9XXXX-XXXX ou XX 9XXXX-XXXX",
          type: "error",
        });
        setTimeout(() => setAlertMessage(""), 7000);
        return; // Interrompe o fluxo
      }
      if (!validateEmail(email)) {
        setAlertMessage({ message: "Email inválido.", type: "error" });
        setTimeout(() => setAlertMessage(""), 7000);
        return; // Interrompe o fluxo
      }

      // Dados da requisição
      const requestData = {
        name: name,
        company: company,
        telephone: telephone,
        email: email,
      };

      // Faz a requisição POST
      const response = await api.post(`${downloadLink}`, requestData);

      // Verifica o sucesso da requisição
      if (response.status === 200) {
        setAlertMessage({ message: "Email enviado com sucesso!", type: "success" });
      } else {
        setAlertMessage({ message: "Erro ao enviar email, tente novamente.", type: "error" });
      }

      // Limpa a mensagem após 10 segundos
      setTimeout(() => setAlertMessage(""), 10000);

      return response.data;
    } catch (error) {
      setAlertMessage({ message: "Erro ao enviar email, tente mais tarde", type: "error" });
      console.error("Erro na requisição sendEmailDownloadProduct:", error.message);

      // Limpa a mensagem após 10 segundos
      setTimeout(() => setAlertMessage(""), 10000);
    }
  };

  return (
    <Styled.BackgroundOutsideModal isOpen={isOpenModal}>
      <Styled.Modal
        isOpen={isOpenModal}
        disableUserSelect={disableUserSelect}
        maxWidth={maxWidth}
        className="modal-content"
      >
        <Styled.SpaceTop>
          <Text text={title} bold color="var(--text-solid)" size="lg" />
          <Align column alignEnd gap="10px" width="auto">
            <Styled.CloseIcon onClick={toggleModal} />
          </Align>
        </Styled.SpaceTop>
        <Text text={text} />
        <Styled.FormContent>
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
            value={formData.telephone}
            name="telephone"
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
        </Styled.FormContent>

        {/* Exibição da mensagem de erro */}
        {alertMessage &&
          <Styled.AlertTextContent>
            <Styled.AlertText type={alertMessage.type}>{alertMessage.message}</Styled.AlertText>
          </Styled.AlertTextContent>
        }

        <Align gap="20px" justify="center">
          <Button text="Enviar" onClick={() => sendEmailDownloadProduct(downloadLink)} type="primary" />
          <Button text="Cancelar" onClick={toggleModal} type="secondary" />
        </Align>
      </Styled.Modal>
    </Styled.BackgroundOutsideModal>
  );
}
