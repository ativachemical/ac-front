import React, { useState } from 'react';
import { DefaultImg, Agro, WaterTreatment, PaintsAndResins, HomeAndIndustrialCleaning, AgroPage, PaintPage, CleanPage, WaterTreatmentPage } from '../../../assets/imgs';
import * as Styles from './style';
import { Text } from '../../text';

const values = [
    {
        img: Agro,
        imgPage: AgroPage,
        title: "Agro",
        icon: <Styles.PlantIcon />,
    },
    {
        img: PaintsAndResins,
        imgPage: PaintPage,
        title: "Tintas & Resinas",
        icon: <Styles.ColorIcon />,
    },
    {
        img: HomeAndIndustrialCleaning,
        imgPage: CleanPage,
        title: "Home & Industrial Cleaning",
        icon: <Styles.CleanHandsIcon />,
    },
    {
        img: WaterTreatment,
        imgPage: WaterTreatmentPage,
        title: "Tratamento de Água",
        icon: <Styles.DropPlusLessIcon />,
    },
];

export function ProductCardItem({ img = DefaultImg, imgPage, title = 'Product name', icon = <Styles.PlantIcon/>, linkName = 'Saiba mais' }) {
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
                <Styles.ContentCard onClick={handleFullScreen}>
                    <div style={{ position: 'relative' }}>
                        <Styles.Img src={img} alt="Product" width="100%" borderRadius="20px"/>
                        {icon}
                    </div>
                    <Styles.TextCard>
                        <Text bold center text={title}/>
                        <Text link text={linkName}/>
                    </Styles.TextCard>
                </Styles.ContentCard>
            ) : (
                <Styles.FullScreenContainer onClick={handleCloseFullScreen}>
                    <Styles.ImageContainer>
                        <Styles.Img src={imgPage} alt="Product" width="100%" height="auto" borderRadius="20px"/>
                    </Styles.ImageContainer>
                    <Styles.CloseIcon/>
                </Styles.FullScreenContainer>
            )}
        </>
    );
}

export function ProductDescription() {
    return (
        <Styles.ContentCards>
            {values.map((product, index) => (
                <ProductCardItem
                    key={index}
                    img={product.img}
                    title={product.title}
                    icon={product.icon}
                    imgPage={product.imgPage}
                />
            ))}
        </Styles.ContentCards>
    );
}
