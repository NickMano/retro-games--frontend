import React, { Component } from 'react'
import HeaderMenu from './HeaderMenu'
import '../assets/styles/components/Header.scss'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className='header header--second-color'>
        <Link to='/'>
            <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
        </Link>
        <HeaderMenu />
    </header>
)

export default Header
