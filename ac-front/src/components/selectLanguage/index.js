import React, { useState, useEffect } from "react"
import * as Styled from "./style"
import { Br, En, Es } from "../../assets/imgs"
import { Text } from "../text"
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage" // Ajuste o caminho conforme necessário

export function SelectLanguage() {
  const languages = [
    { name: "En", flag: En, googleCode: "en" },
    { name: "PT-Br", flag: Br, googleCode: "pt" },
    { name: "Es", flag: Es, googleCode: "es" },
  ]

  // Função para obter o idioma salvo ou o idioma padrão
  const getSavedLanguage = () => {
    const savedLanguage = getLocalStorage("selectedLanguage")
    return savedLanguage
      ? languages.find((lang) => lang.googleCode === savedLanguage) || languages[1]
      : languages[1]
  }

  const [selectedLanguage, setSelectedLanguage] = useState(getSavedLanguage)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    changeLanguage(language.googleCode)
    setLocalStorage("selectedLanguage", language.googleCode)
  }

  const changeLanguage = (languageCode) => {
    const translateSelect = document.querySelector(".goog-te-combo")
    if (translateSelect) {
      translateSelect.value = languageCode
      translateSelect.dispatchEvent(new Event("change"))
    }
  }  

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      document.body.appendChild(script)
    }
  
    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript()
    } else {
      // Adicione um pequeno atraso para garantir que o script esteja pronto
      setTimeout(() => changeLanguage(selectedLanguage.googleCode), 1000)
    }
  }, [selectedLanguage])
  

  return (
    <Styled.Dropdown className="notranslate">
      <Styled.DropdownButton onClick={toggleDropdown}>
        <Styled.Flag src={selectedLanguage.flag} />
        <Text text={selectedLanguage.name} size={"md"} />
      </Styled.DropdownButton>
      {isOpen && (
        <Styled.LanguageOptionsContainer>
          {languages.map((language) => (
            <Styled.LanguageOption
              key={language.name}
              onClick={() => handleLanguageChange(language)}
            >
              <Styled.Flag src={language.flag} />
              <Text text={language.name} size={"md"} />
            </Styled.LanguageOption>
          ))}
        </Styled.LanguageOptionsContainer>
      )}
    </Styled.Dropdown>
  )
}
