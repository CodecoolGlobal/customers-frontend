const express = require('express');

const app = express();

app.use(express.static('./dist/angular-load-users'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/angular-load-users/'}),
);

app.listen(process.env.PORT || 8080);
