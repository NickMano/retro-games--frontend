import React from 'react'
import Navbar from './NavBar/Navbar'
import Footer from './Footer'
 
const Layout = ({children}) => (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
)

export default Layout