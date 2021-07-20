import React from "react"
import PropTypes from "prop-types"
import { Nav, Navlink, MenuIcon, NavMenu } from "./styles"
import { menuData } from "../../data/MenuData"

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
    </Nav>
  )
}

Header.defaultProps = defaultProps
Header.propTypes = propTypes

export default Header
