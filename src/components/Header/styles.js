import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw -1300px) / 2); */
  z-index: 100;
  position: relative;
`

export const Navlink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const MenuIcon = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
