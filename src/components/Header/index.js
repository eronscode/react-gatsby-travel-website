import React from "react"
import PropTypes from "prop-types"
import { Nav, Navlink, MenuIcon, NavMenu, NavBtn } from "./styles"
import { menuData } from "../../data/MenuData"
import Button from "@components/UI/Button"

const defaultProps = {}

const propTypes = {}

function Header() {
  return (
    <Nav>
      <Navlink to="/">EXPERIO</Navlink>
      <MenuIcon />
      <NavMenu>
        {menuData.map(item => (
          <Navlink to={item.link} key={item.title}>
            {item.title}
          </Navlink>
        ))}
      </NavMenu>
      <NavBtn>
          <Button>Book A Flight</Button>
      </NavBtn>
    </Nav>
  )
}

Header.defaultProps = defaultProps
Header.propTypes = propTypes

export default Header
