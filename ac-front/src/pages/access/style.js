import styled from 'styled-components';
import {CutOutLogo, InlineLogo} from '../../assets/imgs'

export const PageContent  = styled.div`
    display:flex;
    height:100vh;
    @media(width < 768px){
        flex-direction:column;
    }
`

export const Left  = styled.div`
    display:flex;
    position:static;
    width:40vw;
    height:100vh;
    justify-content:flex-end;
    align-items:center;
    background: var(--bg-theme-color);
    @media(width < 768px){
        width:100%;
        height:15%;
        padding:10px;
    }
`;

export const Right = styled.div`
    flex:1;
    display: flex;
    padding:8px;
    left: 40vw;
    overflow-y: auto;
    flex-direction:column;
    height:100%;
    background: var(--bg-color);
`

export const Center = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
`

export const BgImage = styled.div`
    width:100%;
    height:100%;
    background-image: url(${CutOutLogo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 50vh;
    opacity: 0.2;

    @media (max-width: 768px) {
        background-image: url(${InlineLogo});
        background-position: center;
        background-size: contain;
        opacity: .8;

    }
`;

export const ImgLogoInline = styled.img`
width:150px;
height:45px;
@media (width < 768px) {
    display: none;
}
`