import api from "../../../services/ac-api";

export const verifyRecaptcha = async (token, expectedAction) => {
    try {
        const response = await api.post('recaptcha/validate', {
            token,
            expectedAction,
        });

        return response.data;  // Exemplo: { isValid: true }
    } catch (error) {
        console.error("Erro ao validar o reCAPTCHA", error);
        return { isValid: false };
    }
};