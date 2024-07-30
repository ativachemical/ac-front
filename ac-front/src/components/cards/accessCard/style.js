import styled, { css, keyframes } from "styled-components"
import { User } from "../../../assets/icons/index"

export const Card = styled.div`
  // user-select:none;
  width: 330px;
  height: auto;
  background-color: var(--bg-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  position: relative;
`
export const Content = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 10%;
  justify-content: center;
  z-index: 9999;
  gap: 25px;
`
export const ContentButtonCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  height: 50px;
  width: 100%;
`
export const BaseButtonCard = styled.button`
  background: ${(props) =>
    props.isRegister ? "var(--bg-color)" : "var(--bg-secondary-color)"};
  padding: 5% 5%;
  color: var(--text-secundary-color);
  width: 100%;
  border: none;
  cursor: pointer;
  z-index: 9999;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`

export const ButtonCardLogin = styled(BaseButtonCard)`
  border-radius: ${(props) =>
    props.isRegister ? "10px 10px 10px 0" : "10px 10px 10px 0"};
`

export const ButtonCardRegister = styled(BaseButtonCard)`
  border-radius: ${(props) =>
    props.isRegister ? "10px 10px 0 10px" : "10px 10px 0 10px"};
`

export const UnderButtonCard = styled.div`
  border-radius: 25px 25px 0 0;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    var(--bg-secondary-color) 50%,
    var(--bg-color) 50%
  );
  width: 100%;
  position: absolute;
  flex-grow: 1;
`

// Define keyframes using keyframes helper
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  10%, 30%, 50% { transform: translateX(-5px); }
  20%, 40%, 60%{ transform: translateX(5px); }
  70%, 80%, 90%, 100% { transform: translateX(0); }
`

// Use css helper to inject keyframes correctly
export const UserIcon = styled(User)`
  width: 90px;
  height: auto;
  background: var(--bg-secondary-color);
  border-radius: 100%;
  transition: border-color 0.01s ease;
  border: 2px solid transparent;

  ${(props) =>
    props.loginSuccess &&
    css`
      border: 2px solid var(--success-color);
    `}

  ${(props) =>
    props.loginError &&
    css`
      border: 2px solid var(--error-color);
      animation: ${shakeAnimation} 0.8s ease-in-out;
    `}
`
// export { CardStyled as Card, ButtonStyled as Button };
