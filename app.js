/**
 * Created by wanli on 2017/11/17.
 */
var express = require('express');
var app = express()
app.use(express.static('browser'));
app.get('*', function (req, res) {
  res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>Title</title>
            </head>
            <body>
              <div id="app"></div>
              <script src="/dist/index.bundle.js"></script>
            </body>
            </html>`)
});

app.listen(3000);