import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import data from '../frontend/db.json';
import config from './config';

const { ENV, PORT } = config;

const app = express();

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

const setResponse = (html) => {
  return (`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="icon" href="./favicon.ico">
            <link rel="stylesheet" href="assets/app.css" type="text/css"/> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>RetroGames</title>
        </head>
        <body>
            <div id="app">
            ${html}  
            </div>
            <script src="assets/app.js" type="text/javascript"></script>
        </body>
        </html>
    `);
};

const renderApp = (req, res) => {
  const store = createStore(reducer, data);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server running on port ${PORT}`);
});
