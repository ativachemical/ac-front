import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { LogOut, Menu } from "../../assets/icons/index"

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`

export const HeaderNav = styled.header`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: var(--bg-color);
  text-align: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-color);
  z-index: 9999;
  box-shadow: var(--box-shadow);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: ${(props) => (props.isOpenMenu ? `20px` : `0`)};
    position: ${(props) => (props.isOpenMenu ? `fixed` : `none`)};
    height: ${(props) => (props.isOpenMenu ? `100%` : `auto`)};
  }
  & > div {
    // background-color: white;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImgLogoInline = styled.img`
  cursor: pointer;
  max-width: 232px;
  width: 100%;
  height: auto;
`

export const ContentMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
  ${(props) => (props.isOpenMenu ? `` : `display:none;`)}
`

export const Li = styled.li`
  color: var(--text-header-color);
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;

  &.active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 5px;

    a {
      font-weight: 700;
    }
  }
`

export const NavLinkItem = styled(NavLink)`
  transition: 1s;
  color: var(--text-header-color);
  font-size: 16px;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;

  &.active {
    font-weight: 700;
  }
  @media(width<768px) {
    font-size: 20px;
  }
`

export const A = styled.a`
  color: var(--text-header-color);
  font-size: 16px;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;

  @media(width<768px) {
    font-size: 20px;
  }
`

export const BaseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  fill: var(--text-apresentation-color);
  width: 30px;
  // filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
  cursor: pointer;
`

export const MenuIcon = styled(BaseIcon).attrs({
  as: Menu,
})`
  @media (width > 769px) {
    display: none;
  }
`

export const LogOutIcon = styled(BaseIcon).attrs({
  as: LogOut,
})`
width: 20px;
fill: var(--admin-color);
`

export const SectionWithPaddingTop = styled.div`
  padding-top: 84px;
`

export const Points = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const Point = styled.div`
  cursor: pointer;
  border-radius: 100%;
  height: 12px;
  width: 12px;
  background-color: var(--bg-tertiary-color);
  opacity: ${(props) =>
    props.selected
      ? "1"
      : "0.5"}; /* Altera a opacidade com base na propriedade selected */
`
