import React, {useState} from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Login.scss'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'

 
const Login = props => {
    const [form, setValues] = useState({ email : ''})

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        props.loginRequest(form)
        props.history.push('/')
    }
    return(
        <>
            <section className="login">
                <section className="login__container">
                    <h2 className="login__container--title">Inicia Sesion</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="login__container--input" 
                            name="email"
                            placeholder="Correo" 
                            onChange={handleInput}
                        />
                        <input
                            name="password" 
                            type="password" 
                            className="login__container--input" 
                            placeholder="Contraseña" 
                            onChange={handleInput}

                        />
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
                    <p className="login__container--register">No tienes ninguna cuenta 
                        <Link to='/register'> Regístrate</Link>
                    </p>
                </section>
            </section>
        </>
    )
}

const mapDispachToProps =  {
    loginRequest
}

export default connect(null, mapDispachToProps)(Login)