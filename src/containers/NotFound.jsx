import React from 'react'
import '../assets/styles/components/NotFound.scss'
const errorIcon = require('../assets/static/icons8-info-200.png')

import '../assets/styles/App.scss'
 
const Error = () => (
    <div className="Login">
        <section className="error">
            <img src={errorIcon} alt="Something was wrong" className="error__image" />
            <h1 className="error__title">404</h1>
            <h2 className="error__subtitle">Pagina no encontrada</h2>
        </section>
    </div>
)

export default Error