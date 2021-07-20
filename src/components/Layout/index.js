import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import {GlobalStyles } from "@utils/styles/globalStyles"

const defaultProps = {}

const propTypes = {}

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <main>{children}</main>
    </>
  )
}

Layout.defaultProps = defaultProps
Layout.propTypes = propTypes
export default Layout
