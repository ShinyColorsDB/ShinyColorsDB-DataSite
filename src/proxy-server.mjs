import { app as serverEn } from './server/en/server.mjs';
import { app as serverCn } from './server/cn/server.mjs';
import { app as serverJp } from './server/ja/server.mjs';
import { app as serverTw } from './server/tw/server.mjs';

const express = require('express');

function run () {
  const port = process.env.PORT || 60000;
  const server = express();

  server.use('/', serverTw());
  server.use('/jp', serverJp());
  server.use('/cn', serverCn());
  server.use('/en', serverEn());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
