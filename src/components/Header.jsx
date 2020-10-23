import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar'
import userIcon from '../images/icons8-user-24.png'
import '../assets/styles/components/Header.scss'
 
const Header = props => {
    const { user } = props 
    const hasUser = Object.keys(user).length > 0
    const handleLogout = () => {
        props.logoutRequest({})
    }

    return(
        <header className='header header--second-color'>
            <Link to='/'>
                <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img 
                        src={hasUser ? gravatar(user.email) : userIcon} 
                        alt={user.email} 
                    />
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser 
                        ? <>
                            <li><Link to='/login'>{user.email}</Link></li><li>
                            <Link to='/login' onClick={handleLogout}>Cerrar sesion</Link></li>
                            </>
                        : <li><Link to='/login'>Iniciar sesion</Link></li>
                    }
                    
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        history
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)