import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Login.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 className='login__container--title'>Registrate</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='login__container--input'
            type='text'
            placeholder='Nombre'
            onChange={updateInput}
          />
          <input
            name='email'
            className='login__container--input'
            type='text'
            placeholder='Correo'
            onChange={updateInput}
          />
          <input
            name='password'
            className='login__container--input'
            type='password'
            placeholder='Contraseña'
            onChange={updateInput}
          />
          <button className='login__container--button' type='submit'>Registrarme</button>
        </form>

        <p className='login__container--login'>
          <Link to='login'>Iniciar sesion</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);
