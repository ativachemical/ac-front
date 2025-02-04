import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StyledSpace } from "../../text/style";
import * as Styled from "./style";
import { verifyRecaptcha } from "./service";

export function RecaptchaV2({ onVerify }) {
    const [token, setToken] = useState("");

    const handleRecaptchaChange = async (recaptchaToken) => {
        setToken(recaptchaToken);

        // Chame a função para enviar o token para o backend
        const result = await verifyRecaptcha(recaptchaToken, "login");

        // Passa o resultado da verificação para o onVerify ou outro callback
        onVerify(result); // Passando o resultado para o pai (caso necessário)
    };

    return (
        <Styled.Content>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Substitua pelo seu site key
                onChange={handleRecaptchaChange}
            />
            {/* <p>reCAPTCHA Token: {token ? "Gerado" : "Não Gerado"}</p> */}
        </Styled.Content>
    );
}
