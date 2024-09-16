import styled from 'styled-components';

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownButton = styled.button`
    background-color: var(--bg-secondary-color);
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 110px;
    text-align: left;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 10px; /* Espaçamento entre a bandeira e o nome */
`;

export const Flag = styled.img`
    width: 35px;
    height: fit-content;
    border-radius: 5px;
`;

export const LanguageOptionsContainer = styled.div`
    position: absolute;
    background-color: var(--bg-color);
    border: 2px solid var(--bg-tertiary-color);
    z-index: 1;
    width: fit-content;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const LanguageOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
        border-radius: 20px;
    }
`;
