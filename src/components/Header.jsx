import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import userIcon from '../assets/static/icons8-user-24.png'
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className='header header--second-color'>
        <Link to='/'>
            <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
        </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img 
                    />
                    <p>Perfil</p>
                </div>
                <ul>
                            <li><Link to='/login'>{user.email}</Link></li><li>
                            <Link to='/login' onClick={handleLogout}>Cerrar sesion</Link></li>
                </ul>
            </div>
    </header>
)

export default Header
