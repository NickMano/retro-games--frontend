import express from 'express';
import webpack from 'webpack';
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

app.get('*', (req, res) => {
  res.send(`
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
            </div>
            <script src="assets/app.js" type="text/javascript"></script>
        </body>
        </html>
    `);
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server running on port ${PORT}`);
});
