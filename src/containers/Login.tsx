import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/components/Login.scss'
 
const Login: React.FC = () => (
    <>
        <section className="login">
            <section className="login__container">
                <h2 className="login__container--title">Inicia Sesion</h2>
                <form className="login__container--form">
                    <input type="text" className="login__container--input" placeholder="Correo" />
                    <input type="password" className="login__container--input" placeholder="Contraseña" />
                    <button className="login__container--button">Iniciar sesion</button>
                    <div className="login__container--remember-me">
                        <div>
                            <input type="checkbox" id="cbox1" />
                            <label>Recuerdame</label>
                        </div>
                        <a href="#">Olvide mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="Google" />Inicia sesión con Google</div>
                    <div><img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Twitter_icon-icons.com_66803.png" alt="Twitter"/>Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
            </section>
        </section>
    </>
)

export default Login