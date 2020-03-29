import React, { Component } from 'react'
import HeaderMenu from './HeaderMenu'
import '../assets/styles/components/Header.scss'

interface HeaderProps {
    isLogin: boolean,
    secondColor: boolean,
}
 
const Header = ({isLogin, secondColor}: HeaderProps) => {
    const className = (secondColor) ? 'header header--second-color' : 'header'
    
    return(
    <header className={className}>
        <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
        {isLogin == true && <HeaderMenu />}
    </header>
)}
 

export default Header
