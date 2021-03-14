/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import config from './config';
import getManifest from './getManifest';
import setHtmlResponse from './setHtmlResponse';
import routes from './routes';

const { ENV, PORT, API_URL } = config;

const app = express();

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) { req.hashManifest = getManifest(); }
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

//body parser
app.use(express.json());
app.use(cookieParser());

const renderApp = async (req, res) => {
  const { email, name, id, token } = req.cookies;

  let initialState = {
    user: id ? { email, name, id } : {},
    myList: [],
    trends: [],
    switchGames: [],
    nesGames: [],
    psxGames: [],
  };

  try {
    let gameList = await axios({
      url: `${API_URL}/api/games`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });
    gameList = gameList.data.data;
    initialState = {
      ...initialState,
      switchGames: gameList.filter((game) => game.platform.includes('Nintendo Switch') && game._id),
      nesGames: gameList.filter((game) => game.platform.includes('Nintendo Entertainment System') && game._id),
      psxGames: gameList.filter((game) => game.platform.includes('PSX') && game._id),
    };
  } catch (err) {
    console.log(err);
  }

  const store = createStore(reducer, initialState);
  const isLogged = (initialState.user.id);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );

  res.set(
    'Content-Security-Policy',
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  );
  res.send(setHtmlResponse(html, preloadedState, req.hashManifest));
};

routes(app);
app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server running on port ${PORT}`);
});
