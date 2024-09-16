import styled from "styled-components"

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownButton = styled.button`
  background-color: var(--bg-secondary-color);
  color: white;
  padding: 7px 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 110px;
  text-align: left;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px; /* Espaçamento entre a bandeira e o nome */
`

export const LanguageName = styled.p`
  color: var(--text-header-color);
  font-size: 15px;
`

export const Flag = styled.img`
  width: 30px;
  height: fit-content;
  border-radius: 15%;
`

export const LanguageOptionsContainer = styled.div`
  margin-top: 10px;
  position: absolute;
  background-color: var(--bg-color);
  border: 2px solid var(--bg-tertiary-color);
  z-index: 1;
  width: fit-content;
  border-radius: 10px;
  overflow: hidden;
`

export const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 7px 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-secondary-color);
  }
`
