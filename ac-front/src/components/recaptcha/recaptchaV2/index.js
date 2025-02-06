import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StyledSpace } from "../../text/style";
import * as Styled from "./style";
import { verifyRecaptcha } from "./service";

export function RecaptchaV2({ onVerify }) {
    const [token, setToken] = useState("");

    const handleRecaptchaChange = (recaptchaToken) => {
        setToken(recaptchaToken);
        onVerify(recaptchaToken); // Apenas passa o token, sem validar agora
    };

    return (
        <Styled.Content>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
            />
        </Styled.Content>
    );
}

