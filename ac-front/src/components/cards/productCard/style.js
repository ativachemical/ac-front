import styled from 'styled-components'
import {Plant, Color, CleanHands, DropPlusLess, Close } from '../../../assets/icons/index'

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
    z-index: 9999; /* Ajuste o valor conforme necessário para garantir que o componente seja exibido sobre outros elementos */
    padding: 20px;

    img {
        border-radius: 20px;
        height:100%;
        width:100%;
        object-fit: contain;
    }

    /* Estilos adicionais para o conteúdo de texto, se necessário */
    .text-container {
        margin-top: 20px;
        color: #fff;
        text-align: center;
    }

    /* Adicione mais estilos conforme necessário para o ícone, texto, etc. */
`;

export const Img = styled.img`
    width: ${(props) => (props.width ? `${props.width}` : '100%')};
    height: ${(props) => (props.height ? `${props.height}` : 'auto')};
    border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}` : '0')};
    object-fit: cover; /* Ajusta a imagem para cobrir o contêiner mantendo sua proporção */
`;

export const ImageContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
`;

export const ContentCards = styled.div`
display: grid;
gap: 50px;
align-content: space-between;
grid-template-columns: repeat(4, minmax(75px, 1fr));

@media (max-width: 767px) {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores que 768px */
}
`
export const ContentCard = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
align-items:center;
max-width:150px;
@media(width<1024px){
    max-width:150px;
}
`

export const TextCard = styled.div`
display:flex;
text-align: center;
gap:20px;
flex-direction:column;
align-items: center;
height:100%;
justify-content:space-between;
`

export const BaseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    fill:var(--bg-color);
    width:30px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    cursor:pointer;
`

export const PlantIcon = styled(BaseIcon).attrs({
    as: Plant,
})`
`;
export const ColorIcon = styled(BaseIcon).attrs({
    as: Color,
})`
`;
export const CleanHandsIcon = styled(BaseIcon).attrs({
    as: CleanHands,
})`
`;
export const DropPlusLessIcon = styled(BaseIcon).attrs({
    as: DropPlusLess,
})`
`;
// export const QuimistryIcon = styled(BaseIcon).attrs({
//     as: Quimistry,
// })`
// `;

export const CloseIcon = styled(BaseIcon).attrs({
    as: Close,
})`
fill:var(--text-solid);
`;