import passport from 'passport';
import boom from '@hapi/boom';
import axios from 'axios';
import config from './config';

//Basic strategy
require('./utils/auth/strategies/basic');

// OAuth strategy
require('./utils/auth/strategies/oauth');

const routes = (app) => {

  app.post('/auth/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, data) => {
      try {
        if (error || !data) {
          next(boom.unauthorized());
        }

        req.login(data, { session: false }, async (err) => {
          if (err) {
            next(boom.unauthorized());
          }

          const { token, ...user } = data;

          res.cookie('token', token, {
            httpOnly: !config.DEV,
            secure: !config.DEV,
          });

          res.status(200).json(user);
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  app.post('/auth/sign-up', async (req, res, next) => {
    const { body: user } = req;
    try {
      console.log('acccaaa');
      const userData = await axios({
        url: `${config.API_URL}/api/auth/sign-up`,
        method: 'post',
        data: {
          'email': user.email,
          'name': user.name,
          'password': user.password,
        },
      });

      res.status(201).json({
        'name': req.body.name,
        'email': req.body.email,
        'id': userData.data.id,
      });
    } catch (error) {
      next(error);
    }
  });

  app.get('/movies', async (req, res, next) => {

  });

  app.post('/user-movies', async (req, res, next) => {
    try {
      const { body: userMovie } = req;
      const { token } = req.cookies;

      const { data, status } = await axios({
        url: `${config.API_URL}/api/user-movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'post',
        data: userMovie,
      });

      if (status !== 201) {
        return next(boom.badImplementation());
      }

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/user-movies/:userMovieId', async (req, res, next) => {
    try {
      const { userMovieId } = req.params;
      const { token } = req.cookies;

      const { data, status } = await axios({
        url: `${config.API_URL}/api/user-movies/${userMovieId}`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'delete',
      });

      if (status !== 200) {
        return next(boom.badImplementation());
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  app.get(
    '/auth/google-oauth',
    passport.authenticate('google', {
      scope: ['email', 'profile', 'openid'],
    }),
  );

  app.get(
    '/auth/google-oauth/callback',
    passport.authenticate('google', { session: false }),
    (req, res, next) => {
      if (!req.user) {
        next(boom.unauthorized());
      }

      const { token, ...user } = req.user;

      res.cookie('token', token, {
        httpOnly: !config.DEV,
        secure: !config.DEV,
      });

      res.status(200).json(user);
    },
  );
};

export default routes;
