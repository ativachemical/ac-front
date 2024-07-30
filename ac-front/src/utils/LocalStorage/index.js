// Função para definir um item no localStorage
export const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Erro ao definir item no localStorage:', error);
    }
};

// Função para obter um item do localStorage
export const getLocalStorage = (key) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
        console.error('Erro ao obter item do localStorage:', error);
        return null;
    }
};