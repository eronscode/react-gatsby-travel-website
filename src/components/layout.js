
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"




const Layout = ({ children }) => {


  return (
    <>
      <Header />
      
        <main>{children}</main>
        
      
    </>
  )
}



export default Layout
