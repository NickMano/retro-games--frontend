import React from 'react'
import './../assets/styles/components/Header.scss'
import { Link } from 'react-router-dom'
const userIcon = require('../assets/static/icons8-user-24.png')
 
const HeaderMenu = () => (
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt="user" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><Link to='/login'>Cuenta</Link></li>
            <li><Link to='/login'>Iniciar sesion</Link></li>
        </ul>
    </div>
)

export default HeaderMenu
