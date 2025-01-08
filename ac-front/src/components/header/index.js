import React, { useEffect, useState } from "react";
import {
  InlineLogo,
  AboutUsCarousel2,
  AboutUsCarousel3,
  AboutUsCarousel4,
  ServicesCarousel1,
  ServicesCarousel2,
  ServicesCarousel3,
  ServicesCarousel4,
  ProductsCarousel4,
} from "../../assets/imgs";
import * as Styled from "./style.js";
import { Align, Hr, Img } from "../../style.js";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../buttons/button/index.js";
import { logOut } from "../../redux/user/slice.js";
import { SelectLanguage } from "../selectLanguage/index.js";

const content = [
  {
    "/about-us": [
      ProductsCarousel4,
      AboutUsCarousel2,
      AboutUsCarousel3,
      AboutUsCarousel4,
    ],
  },
  {
    "/products": [
      ProductsCarousel4,
      AboutUsCarousel2,
      AboutUsCarousel3,
      AboutUsCarousel4,
    ],
  },
  {
    "/services": [
      ServicesCarousel1,
      ServicesCarousel2,
      ServicesCarousel3,
      ServicesCarousel4,
    ],
  },
];

export function Header({ selectedItem }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const userType = useSelector((state) => state.userReducer.userType);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const index = content.findIndex(
        (obj) => Object.keys(obj)[0] === selectedItem
      );
      const imgsLength = content[index][selectedItem].length - 1;
      setSelectedPointIndex((prevIndex) => (imgsLength === prevIndex ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedPointIndex, selectedItem]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsOpenMenu(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Rolar para o topo ao mudar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  function handleOnclickIsOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handleOnclickIsOpenMenuSamePage() {
    if (window.innerWidth < 769) {
      setIsOpenMenu(!isOpenMenu);
    }
  }

  function handlePointClick(index) {
    setSelectedPointIndex(index);
  }

  return (
    <Styled.Header id="header">
      <Styled.HeaderNav isOpenMenu={isOpenMenu}>
        <Styled.Flex>
          <Align flex alignCenter>
            <Styled.NavLinkItem to="/">
              <Styled.ImgLogoInline src={InlineLogo} />
            </Styled.NavLinkItem>
            {userType === "admin" && (
              <Button
                text={"Sair"}
                type={"outlined"}
                icon={<Styled.LogOutIcon />}
                onClick={() => dispatch(logOut())}
              />
            )}
          </Align>
          <Styled.MenuIcon
            onClick={handleOnclickIsOpenMenu}
            isOpenMenu={isOpenMenu}
          />
        </Styled.Flex>
        <Styled.ContentMenu>
          <Styled.Ul isOpenMenu={isOpenMenu}>
            <Styled.NavLinkItem to="/" selected={selectedItem === "/about-us"}>
              Sobre nós
            </Styled.NavLinkItem>
            {isOpenMenu && <Hr />}
            <Styled.NavLinkItem
              to="/products"
              selected={selectedItem === "/products"}
            >
              Produtos
            </Styled.NavLinkItem>
            {isOpenMenu && <Hr />}
            <Styled.NavLinkItem
              to="/services"
              selected={selectedItem === "/services"}
            >
              Serviços
            </Styled.NavLinkItem>
            {isOpenMenu && <Hr />}
            <Styled.A
              href="#footer"
              onClick={() => {
                handleOnclickIsOpenMenuSamePage();
              }}
            >
              Contato
            </Styled.A>
          <SelectLanguage />
          </Styled.Ul>

        </Styled.ContentMenu>
      </Styled.HeaderNav>
      <Styled.SectionWithPaddingTop>
        {content.map((item, index) => {
          if (item[selectedItem]) {
            return (
              <React.Fragment key={index}>
                <Img src={item[selectedItem][selectedPointIndex]} />
                <Styled.Points>
                  {item[selectedItem].map((img, imgIndex) => (
                    <Styled.Point
                      key={index + "-" + imgIndex}
                      selected={selectedPointIndex === imgIndex}
                      onClick={() => handlePointClick(imgIndex)}
                    />
                  ))}
                </Styled.Points>
              </React.Fragment>
            );
          }
          return null;
        })}
      </Styled.SectionWithPaddingTop>
    </Styled.Header>
  );
}
