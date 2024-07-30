import styled, { keyframes } from "styled-components"
import { ProgressActivity } from "../../../assets/icons/index"

export const Button = styled.button`
  ${({ type }) => {
    switch (type) {
      case "primary":
        return `
          color: var(--text-button);
          background-color: var(--accent-color);
          padding: 8px;
          border-radius: 5px;
          border: 4px solid var(--accent-color);
        `
      case "secondary":
        return `
          color: var(--accent-color);
          background-color: transparent;
          padding: 8px;
          border-radius: 5px;
          border: 4px solid var(--accent-color);
        `
      case "lite":
        return `
          color: var(--text-solid);
          display: flex;
          height: 100%;
          align-items: center;
          background-color: var(--bg-secondary-color);
          padding: 0 5px 0 5px;
          gap: 20px;
          border-radius: 12px;
          border: none;
        `
      case "outlined":
        return `
          color: var(--admin-color);
          display: flex;
          height: 50%;
          align-items: center;
          background-color: var(--admin-color-opacity);
          padding: 0 5px 0 5px;
          gap: 10px;
          border-radius: 32px;
          border: 3px solid var(--admin-color);
        `
      case "error":
        return `
          color: var(--text-button);
          background-color: var(--error-color);
          padding: 8px;
          border-radius: 5px;
          border: 4px solid var(--error-color);
        `
      default:
        return "none"
    }
  }}
  width: auto;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled(ProgressActivity)`
  cursor: default;
  font-size: 16px;
  animation: ${spinAnimation} 2s linear infinite;
  ${({ type }) => {
    switch (type) {
      case "primary":
        return `
          fill: var(--text-button);
        `
      case "secondary":
        return `
          fill: var(--text-button);
        `
      case "lite":
        return `
          fill: var(--text-solid);
        `
      case "outlined":
        return `
          fill: var(--admin-color);
        `
      default:
        return "none"
    }
  }}
`

export const ContentIcon = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  & * {
    ${({ type }) => {
      switch (type) {
        case "primary":
          return `
            fill: var(--text-button);
          `;
        case "secondary":
          return `
            fill: var(--accent-color);
          `;
        case "lite":
          return `
            fill: var(--text-solid);
          `;
        case "outlined":
          return `
            fill: var(--admin-color);
          `;
        default:
          return "fill: var(--success-color)";
      }
    }}
  }
`;
