export default (html, preloadedState, manifest) => {
  const mainStyle = manifest ? manifest['vendors.css'] : '/assets/vendors.app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="icon" href="./favicon.ico">
        <link rel="stylesheet" href="${mainStyle}" type="text/css"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RetroGames</title>
      </head>
      <body>
        <div id="app">
          ${html}  
        </div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
      </body>
      </html>
    `);
};
