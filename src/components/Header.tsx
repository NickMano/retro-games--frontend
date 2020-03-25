import React, { Component } from 'react'
import HeaderMenu from './HeaderMenu'
import '../assets/styles/components/Header.scss'
 
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: props.isLogin,
        } 
    }
    render() {
        let isLogin = this.state
        return(
            <header className="header">
                <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
                {isLogin == 'true' && <HeaderMenu />}
            </header>
        )
    }
} 

export default Header
