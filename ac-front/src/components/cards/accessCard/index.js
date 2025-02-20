import React, { useEffect, useState } from "react"
import { Button, InputForm, RecaptchaV2 } from "../../index"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/ac-api"
import * as Styles from "./style"
import { useDispatch } from "react-redux"
import { saveUserToken, setUserType } from "../../../redux/user/slice"

function test() {
  return async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Test loading");
        resolve();
      }, 5000);
    });
  };
}

export function AccessCard() {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [clientIp, setClientIp] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleVerify = (token) => {
    console.log("Token do reCAPTCHA recebido:", token); // Verifique se o token está correto
    setRecaptchaToken(token); // Atualiza o estado com o token
  };

  const loginOn = () => setIsRegister(false);
  const loginOff = () => setIsRegister(true);

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

  const actionLogin = async () => {
    console.log("Token antes da validação:", recaptchaToken);

    if (!recaptchaToken) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 1000);
      return;
    }

    try {
      const requestData = {
        email: email,
        password: password,
        recaptchaToken: recaptchaToken,
        recaptchaClientIp: clientIp, // Agora enviando o IP do usuário
      };

      const response = await api.post("/auth/login", requestData);

      if (response.data) {
        setLoginSuccess(true);
        dispatch(setUserType("admin"));
        dispatch(saveUserToken(response.data.accessToken));

        setTimeout(() => {
          setLoginSuccess(false);
          navigate("/products");
        }, 500);
      }
    } catch (error) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 1000);
      console.error("Erro ao fazer login:", error);
    }
  };



  return (
    <Styles.Card>
      <Styles.ContentButtonCard>
        <Styles.UnderButtonCard />
        <Styles.ButtonCardLogin isRegister={!isRegister} onClick={loginOn}>
          Login
        </Styles.ButtonCardLogin>
        <Styles.ButtonCardRegister isRegister={isRegister} onClick={loginOff}>
          Cadastro
        </Styles.ButtonCardRegister>
      </Styles.ContentButtonCard>
      <Styles.Content>
        <Styles.UserIcon loginSuccess={loginSuccess} loginError={loginError} />
        {!isRegister && (
          <>
            <InputForm
              name="user"
              type="text"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* reCAPTCHA */}
            <RecaptchaV2 onVerifyF={handleVerify} />
            {/* Botão de login desativado até resolver o reCAPTCHA */}
            <Button
              text="Login"
              onClick={actionLogin}
              type="primary"
              disabled={!recaptchaToken} // Só habilita se tiver um token válido
            />
          </>
        )}
        {isRegister && (
          <>
            <InputForm name="user" type="text" placeholder="Login" />
            <InputForm name="email" type="email" placeholder="Email" />
            <InputForm name="password" type="password" placeholder="Password" />
            <Button
              text="Cadastrar"
              onClick={test()}
              type={"primary"}
            />
          </>
        )}
      </Styles.Content>
    </Styles.Card>
  )
}
