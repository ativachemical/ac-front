import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function RecaptchaV2({ onVerify }) {
    const [token, setToken] = useState("");

    const handleRecaptchaChange = (recaptchaToken) => {
        setToken(recaptchaToken);
        onVerify(recaptchaToken); // Enviar o token para o back-end
    };

    return (
        <div>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_AC_BACK} // Substituir pelo seu site key
                onChange={handleRecaptchaChange}
            />
            <p>reCAPTCHA Token: {token ? "Gerado" : "Não Gerado"}</p>
        </div>
    );
}
