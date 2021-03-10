let tiny = require('tiny-json-http')
let data = require('@begin/data')

exports.handler = async function http(req) {

  //get the number of issues
  const result = await data.get({
    table: 'issues',
  })

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

    <p>
      <ul>${(result.map(issue => `<li>${issue.date} ${issue.number} ${issue.key}</li>`).join(' '))}</ul>

    </p>
    <a href='/testIssues'> Add a test Issue </a>

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
