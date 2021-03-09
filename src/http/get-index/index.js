let tiny = require('tiny-json-http')
let data = require('@begin/data')

exports.handler = async function http(req) {

  let date = new Date().toLocaleDateString

  let url = 'https://api.github.com/repos/smallwins/begin-community/issues'
  const issues = await tiny.get({ url })
  let first = issues.body.length

  //save the number of issues per day
  await data.set({
    table: 'issues',
    number: first,
    date:
  })


  //lookup number of issues and compare to previous days

  let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h1 class="center-text">
      Praise Cage
    </h1>

    <p class="center-text">
      There are ${JSON.stringify(first)} open issues
    </p>

  </body>
</html>`

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: html
  }
}
