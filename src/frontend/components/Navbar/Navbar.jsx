import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions';
import './Navbar.scss';
import NavHam from '../nav-ham/NavHam';
import Logo from '../../images/logo.png';

const isPageWithSecondColor = (location) => {
  return location !== '/';
};

const Navbar = (props) => {
  const { user } = props;
  const cssClassName = 'header';
  const { pathname } = props.location;
  const headerCssClassName = `${cssClassName} ${isPageWithSecondColor(pathname) ? `${cssClassName}--second-color` : ''}`;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <header className={headerCssClassName}>
      <Link to='/' className={`${cssClassName}__img`}>
        <img
          className={`${cssClassName}__img`}
          src={Logo}
          alt='RetroGames'
        />
      </Link>
      <div className={`${cssClassName}__menu`}>
        <div className='header__menu--profile'>
          <NavHam />
        </div>
        <ul>
          {hasUser ? (
            <>
              <li><Link to='/login'>{user.email}</Link></li>
              <li><Link to='/login' onClick={handleLogout}>Cerrar sesion</Link></li>
            </>
          ) : (
            <li>
              <Link to='/login'>Iniciar sesion</Link>
            </li>
          )}

        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    history,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
