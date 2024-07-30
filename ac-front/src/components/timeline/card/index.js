import React, { useState } from "react";
import * as Styled from './style';
import { DefaultImg, SaleToOrder, SaleToOrderImgText, LocalDistribution, LocalDistributionImgText, DirectImportation, DirectImportationImgText, DirectImportationInline, LocalDistributionInline, SaleToOrderInline } from '../../../assets/imgs/index';
import { Text } from "../../text";

const values = [
    {   
        title: "1. Venda por encomenda",
        imgTitle: SaleToOrderInline,
        imgTitleResponsive:  SaleToOrder,
        text : "Ativa Chemical será responsável por gerir todo o processo no fornecimento de produtos para o nosso cliente, desde a importação até a entrega, de forma dedicada e personalizada, com opção do cliente retirar em nosso armazém ou entregarmos diretamente em sua empresa.",
        imgText: SaleToOrderImgText
    }, 
    {   
        title: "2. Venda por distribuição local",
        imgTitle: LocalDistributionInline,
        imgTitleResponsive: LocalDistribution,
        text: ["Ativa Chemical mantém o <b>estoque</b> de alguns produtos estratégicos para venda e distribuição direta em todo território nacional.", "Volume mínimo: Quantidade minima da embalagem (Tambor, IBC, Sacarias e etc).", "Previsão de entrega: Imediata.", "Condições de pagto.: à vista a prazo. crédito sujeito à análise"],
        imgText: LocalDistributionImgText
    }, 
    {   
        title: "3. Importação direta",
        imgTitle: DirectImportationInline,
        imgTitleResponsive: DirectImportation,
        text: ["Seleção de Fornecedores e Produtos: A Ativa Chemical fornece os produtos diretamente dos fabricantes parceiros e homologados, com entrega no porto de embarque (FOB) ou destino (CFR), para importação direta pelo cliente.", "Uma importação direta realizada pelo cliente, é um processo em que uma empresa ou indivíduo assume a responsabilidade por todos os aspectos da importação de mercadorias ou produtos de outro país, sem o uso de intermediários, como agentes de carga ou corretores de importação."],
        imgText: DirectImportationImgText
    }, 
];

export function ProductCardItem({ imgTitle = DefaultImg, imgResponsive = DefaultImg, imgPage, title = 'Product name', linkName = 'Saiba mais', text = '' }) {
    const [fullScreen, setFullScreen] = useState(false);

    const handleFullScreen = () => {
        setFullScreen(true);
    };

    const handleCloseFullScreen = () => {
        setFullScreen(false);
    };

    return (
        <>
            {!fullScreen ? (
                <div onClick={handleFullScreen}>
                    <Styled.ContentCard style={{ position: 'relative' }}>
                        {window.innerWidth > 768 ? (
                                <Styled.Img src={imgTitle} width={50}/>
                        ) : (
                            <>
                                <Styled.Img src={imgResponsive} width={50}/>
                                <Text bold center text={title} />
                            </>
                            
                        )}
                    </Styled.ContentCard>
                </div>
            ) : (
                <Styled.FullScreenContainer onClick={handleCloseFullScreen}>
                    <Styled.ImageContainer>
                        <Styled.Img src={imgPage} alt="Product" width="100%" height="auto" borderRadius="20px" />
                    </Styled.ImageContainer>
                    <Styled.CloseIcon />
                </Styled.FullScreenContainer>
            )}
            {/* Renderiza o texto HTML de forma segura */}
            {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </>
    );
}

export function TimelineCard() {
    return (
        <Styled.ContentCards>
            {values.map((product, index) => (
                <ProductCardItem
                    key={index}
                    imgTitle={product.imgTitle}
                    imgResponsive={product.imgTitleResponsive}
                    title={product.title}
                    imgPage={product.imgText}
                />
            ))}
        </Styled.ContentCards>
    );
}
