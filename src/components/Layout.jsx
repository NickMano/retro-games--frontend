import React from 'react'
import Header from './NavBar/Navbar'
import Footer from './Footer'
 
const Layout = ({children}) => (
    <>
        <Header />
            {children}
        <Footer />
    </>
)

export default Layout