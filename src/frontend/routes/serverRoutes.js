import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';

const serverRoutes = (isLogged) => {
  [
    {
      exact: true,
      path: '/',
      component: isLogged ? Home : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
