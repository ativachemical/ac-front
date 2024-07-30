import React, { useState } from 'react'
import { Footer, Header, Text, ProductDescription, } from '../../components/index'
import { Img, PageContent } from '../../style'
import * as Styles from './style';
import { CommitmentToQuality, CustomizedSolutions, CustomerSuccess, Pilars } from '../../assets/imgs'

export function AboutUs() {
    const [selectedItem, ] = useState("/about-us");
    return(
        <>
            <Header selectedItem={selectedItem} />
                <PageContent>
                    <Text text="Quem somos" title center/>
                    <Text center text={"A Ativa Chemical surgiu da busca incessante de nossos clientes por inovação e excelência no atendimento e fornecimento de matérias-primas. Somos movidos por desafios para simplificar processos, gerenciar riscos e desenvolver soluções no fornecimento e abastecimento das indústrias dos segmentos: AGRO, HOME & INDUSTRIAL CLEANING, TINTAS & RESINAS e TRATAMENTO DE ÁGUA."} />
                    
                    <Text text="Compromisso e Qualidade" title center/>

                    <Styles.Gap value={'50px'}>
                        <Styles.FlexItems imgFirst>
                            <Img src={CommitmentToQuality} alt="commitment to quality" width="200px" borderRadius="20px"/>
                            <Styles.Gap>
                                <Text text="Compromisso com a qualidade:" bold/>
                                <Text text="Na divisão de produtos químicos, nossa empresa se destaca pela dedicação à qualidade, desde a seleção dos melhores fornecedores até a entrega de resultados consistentes. Nosso compromisso com a excelência nos permite atender pequenos, médios e grandes compradores brasileiros."/>
                            </Styles.Gap>
                        </Styles.FlexItems>

                        <Styles.FlexItems>
                            <Img src={CustomizedSolutions} alt="commitment to quality" width="200px" borderRadius="20px"/>
                            <Styles.Gap>
                                <Text text="Soluções Personalizadas:" bold/>
                                <Text text="Entendemos as necessidades específicas de cada cliente e, por isso, desenvolvemos soluções personalizadas para atender às demandas do mercado. A Ativa Chemical oferece uma solução completa, estruturada com robusta capacidade operacional e financeira, respaldada pela força comercial e know-how que nos tornaram referência no setor."/>
                            </Styles.Gap>
                        </Styles.FlexItems>

                        <Styles.FlexItems imgFirst>
                            <Img src={CustomerSuccess} alt="commitment to quality" width="200px" borderRadius="20px"/>
                            <Styles.Gap>
                                <Text text="Comprometidos com o Sucesso do Cliente:" bold/>
                                <Text text="Na Ativa Chemical, o sucesso do cliente é a nossa prioridade. Através da nossa dedicação em superar desafios, simplificar processos e entregar produtos de alta qualidade, buscamos estabelecer parcerias duradouras e contribuir para o crescimento sustentável dos nossos clientes."/>
                            </Styles.Gap>
                        </Styles.FlexItems>
                    </Styles.Gap>

                    <Text id="main-segments" text="Principais Segmentos" title center/>
                    <ProductDescription/>

                    <Text text="Nossos Pilares" title center/>
                    
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
                        <Text bold text={"Missão"}/>
                        <Text text={`Conectar clientes aos produtos químicos e serviços de importação, dentro de uma solução completa no fornecimento de produtos, tornando viável os processos empresariais ao longo de toda cadeia de suprimentos, contribuindo com o crescimento do mercado, o meio ambiente, saúde e bem-estar de toda a sociedade.`}/>

                        <Text bold text={"Visão"}/>
                        <Text text={`Ser uma empresa de referência no mercado que entrega uma solução completa no fornecimento de produtos químicos para pequenas medias e grandes empresas de forma regionalizada.`}/>
                    
                        <Text bold text={"Valores"}/>
                        <Text text={`Acreditamos na importância das relações interpessoais respeitosa e colaborativa, como o pilar principal para o desenvolvimento de um ambiente saudável e duradouro. Ter um compromisso com a verdade é o melhor caminho para cultivar a qualidade dessas relações. Quanto maior a diversidade de um grupo, maior será sua sabedoria, vitalidade e riqueza.`}/>
                    </div>

                    <Img src={Pilars}  width="250px"/>
                </PageContent>
            <Footer/>
        </>
    )
}