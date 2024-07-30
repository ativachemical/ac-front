import React, { useState } from "react";
import * as Styled from './style';
import { DefaultImg, SaleToOrder, SaleToOrderImgText, LocalDistribution, LocalDistributionImgText, DirectImportation, DirectImportationImgText, DirectImportationInline, LocalDistributionInline, SaleToOrderInline } from '../../../assets/imgs/index';
import { Text } from "../../text";
import { Img } from "../../../style";

const content = [
    {   
        title: "Venda por encomenda",
        imgTitle: SaleToOrderInline,
        imgTitleResponsive:  SaleToOrder,
        text : "Ativa Chemical será responsável por gerir todo o processo no fornecimento de produtos para o nosso cliente, desde a importação até a entrega, de forma dedicada e personalizada, com opção do cliente retirar em nosso armazém ou entregarmos diretamente em sua empresa.",
        imgText: SaleToOrderImgText
    }, 
    {   
        title: "Venda por distribuição local",
        imgTitle: LocalDistributionInline,
        imgTitleResponsive: LocalDistribution,
        text: ["Ativa Chemical mantém o <b>estoque</b> de alguns produtos estratégicos para venda e distribuição direta em todo território nacional.", "Volume mínimo: Quantidade minima da embalagem (Tambor, IBC, Sacarias e etc).", "Previsão de entrega: Imediata.", "Condições de pagto.: à vista a prazo. crédito sujeito à análise"],
        imgText: LocalDistributionImgText
    }, 
    {   
        title: "Importação direta",
        imgTitle: DirectImportationInline,
        imgTitleResponsive: DirectImportation,
        text: ["Seleção de Fornecedores e Produtos: A Ativa Chemical fornece os produtos diretamente dos fabricantes parceiros e homologados, com entrega no porto de embarque (FOB) ou destino (CFR), para importação direta pelo cliente.", "Uma importação direta realizada pelo cliente, é um processo em que uma empresa ou indivíduo assume a responsabilidade por todos os aspectos da importação de mercadorias ou produtos de outro país, sem o uso de intermediários, como agentes de carga ou corretores de importação."],
        imgText: DirectImportationImgText
    }, 
];

export function TimelineCard() {
    const [selectedCard, setSelectedCard] = useState(0); // Estado para rastrear o card selecionado

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <Styled.Content>
            <Styled.CardsContent>
                {content.map((item, index) => (
                    <React.Fragment key={index}>
                        <Styled.Card
                            onClick={() => handleCardClick(index)}
                            isSelected={index === selectedCard}
                        >
                            <Styled.Flex isSelected={index === selectedCard}>
                                {window.innerWidth > 768 ? (
                                    <>
                                        <Styled.Img src={item.imgTitle} width={50} isSelected={index === selectedCard}/>
                                    </>
                                ) : (
                                    <React.Fragment>
                                        <Styled.Img src={item.imgTitleResponsive} width={50} isSelected={index === selectedCard}/>
                                        <Text text={`${index + 1}. ${item.title}`} center/>
                                    </React.Fragment>
                                )}
                            </Styled.Flex>
                        </Styled.Card>
                        {/* {index < content.length - 1 && <Styled.Line />} */}
                    </React.Fragment>
                ))}
            </Styled.CardsContent>

            <Styled.Description>
                {Array.isArray(Object.values(content[selectedCard])[2]) ? (
                    Object.values(content[selectedCard])[2].map((text, index) => (
                        <React.Fragment key={index}>
                            <Text text={text} space={10}/>
                            <Img src={content[selectedCard].imgText} isSelected={index === selectedCard}/>
                        </React.Fragment>
                    ))
                ) : (
                    <React.Fragment>
                        <Text text={content[selectedCard].text} space={10}/>
                        <Img src={content[selectedCard].imgText} isSelected={selectedCard}/>
                    </React.Fragment>
                )}
            </Styled.Description>
        </Styled.Content>
    );
}
