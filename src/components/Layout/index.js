import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {


    return (
      <>
        <Header />
        
          <main>{children}</main>
          
        
      </>
    )
  }
  
  
  
  export default Layout