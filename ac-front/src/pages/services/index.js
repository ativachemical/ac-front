import React, { useState } from 'react'
import { Footer, Header, Text, TimelineCard } from '../../components/index'
import {PageContent} from '../../style'

export function Services() {
    const [selectedItem, ] = useState("/services");
    return(
        <div>
            <Header selectedItem={selectedItem} />
                <PageContent>

                    <Text text="Fornecendo soluções" title/>
                    <Text space={10} text={["A Ativa Chemical é uma empresa marcada por uma trajetória de anos de experiência no mercado nacional e internacional. "
                    ,"Impulsionados por grandes desafios, simplificação de processos, gestão de riscos e entrega de resultados sólidos. Apresentamos uma solução completa e abrangente, moldada para atender às necessidades de pequenos, médios e grandes compradores brasileiros de produtos químicos."
                    ,"Especializada no desenvolvimento de novos fornecedores alinhados com as demandas mais exigentes desse setor, a Ativa Chemical garante a procedência e fornecimento de seus produtos químicos, proporcionando aos nossos clientes uma consistência na qualidade das matérias-primas. Isso resulta na eliminação de impactos nas correções de fórmulas, garantindo um abastecimento confiável para a industrialização ou revenda."
                    , "Como unidade de negócios de produtos químicos da Stile Trading, fortalecemos ainda mais nossa presença e expertise no setor, agregando com os serviços de importação e distribuição em todo território nacional."
                    ,"A Ativa Chemical entrega soluções estruturadas, com capacidade operacional e financeira robustas no fornecimento de produtos químicos e serviços."]} />

                    <TimelineCard/>
                    <Text text={"Estamos prontos para colaborar com você. Entre em contato conosco para conhecer mais sobre nossos produtos, serviços e como podemos contribuir para o sucesso do seu negócio. Na Ativa Chemical, a inovação e a qualidade estão sempre em ação."}/>

                    {/* <Text text="importações" title/>
                    <Text text="Fornecemos a melhor solução para entrega de mercadorias no desembaraço aduaneiro no Brasil do fornecedor internacional para sua empresa ou fornecer diretamente de nossos parceiros de distribuição"/>
                    <Img src={SImportacaoDireta} width={700}/>
                    <Img src={SImportacaoTrading} width={700}/>
                    <Img src={SDistribuicao} width={700}/>
                    <Img src={SDescricao} width={700}/>

                    <Text text="Parceiros de Negócio" title/>
                    <Text text="Conectar clientes aos produtos químicos e serviços de importação, dentro de uma solução completa no fornecimento de produtos, tornando viável os processos empresariais ao longo de toda cadeia de suprimentos, contribuindo com o crescimento do mercado, o meio ambiente, saúde e bem-estar de toda a sociedade."/>
                    <Img src={FluxoSimplificado} width={700}/>

                    <Text text="Vantagens" title/>
                    <Img src={Vantagens} width={700}/>

                    <Text text="Distribuidores Locais" title/>
                    <Text text="A Ativa Chemical mantem uma parceria estratégica com alguns distribuidores locais para que nossos clientes encontre 100% de sua demanda através da Ativa Chemical. Maior comodidade para os nossos clientes, sem perder a confiabilidade na qualidade de nossos produtos e rede de abastecimento."/>

                    <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center"}}>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                        <Img src={DefaultImg} width={80} borderRadius={10}/>
                    </div> */}
                </PageContent>

            <Footer/>
        </div>
    )
}