import React from 'react'
import './../assets/styles/components/Header.scss'
const userIcon = require('../assets/static/icons8-user-24.png')
 
const HeaderMenu = () => (
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt="user" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="#">Cuenta</a></li>
            <li><a href="#">Cerrar sesion</a></li>
        </ul>
    </div>
)

export default HeaderMenu
