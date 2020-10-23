import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutRequest } from '../../actions'
import userIcon from '../../images/icons8-user-24.png'
import './Navbar.scss'
import NavHam from '../nav-ham/NavHam';
 
const Navbar = props => {
    const { user } = props 
    const cssClassName = "header"
    const hasUser = Object.keys(user).length > 0
    const handleLogout = () => {
        props.logoutRequest({})
    }

    return(
        <header className={`${cssClassName} ${cssClassName}--second-color`}>
            <Link to='/' className={`${cssClassName}__img`}>
                <img 
                    className={`${cssClassName}__img`} 
                    src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" 
                    alt="Platzi Video" 
                />
            </Link>
            <div className={`${cssClassName}__menu`}>
                <div className="header__menu--profile">
                    <NavHam />
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)