import styled from 'styled-components';
import { Close } from '../../../assets/icons/index';

export const Card = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    @media (max-width: 768px) {
        max-width: 300px;
        padding: 5px 10px;
        background-color: var(--bg-secondary-color);
        border-radius: 20px;
    }
`;

export const Img = styled.img`
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    @media (min-width: 769px) {
        width: 100%;
    }
    height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
    border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}px` : '0')};
`;

export const FullScreenContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;

    img {
        border-radius: 20px;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .text-container {
        margin-top: 20px;
        color: #fff;
        text-align: center;
    }
`;

export const ImgBackground = styled.img`
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
    border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}` : '0')};
    object-fit: cover;
`;

export const ImageContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
`;

export const ContentCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 769px) {
        flex-direction: column;
    }
`;

export const ContentCard = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 20px;
    &:hover{
        background:var(--bg-secondary-color);
    }

    @media (min-width: 1025px) {
        max-width: 1050px;
        background-color: transparent;
    }
    @media (max-width: 767px) {
        max-width: 200px;
        width: 100%;
        padding: 20px;
        background-color: var(--bg-primary-color);
        box-shadow: var(--box-shadow);
        height: 150px;
    }
`;

export const TextCard = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const BaseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    fill: var(--bg-color);
    width: 30px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    cursor: pointer;
`;

export const CloseIcon = styled(BaseIcon).attrs({
    as: Close,
})`
    fill: var(--text-solid);
`;
