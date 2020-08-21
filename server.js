import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {


  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="assets/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#262626" />
    <meta
      name="description"
      content="A PokéDex-like app created with React"
    />
    <link rel="apple-touch-icon" href="assets/logo192.png" />
    <link rel="manifest" href="assets/manifest.json" />
    
    <link rel="stylesheet" href="bundle.css"/>
        
    <title>Poké React</title>
  </head>
  <body>
    <div id="root">${ReactDOMServer.renderToString(<App/>)}</div>
    <script src="bundle_client.js"></script>  
  </body>
  </html>`

  res.send(html);

});

app.listen(PORT, () => console.log(`listening at ${PORT}`));