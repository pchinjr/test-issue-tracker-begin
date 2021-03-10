let data = require('@begin/data')

exports.handler = async function http (req) {

  console.log(req.pathParameters.issueKey)


  await data.destroy({
    table: 'issues',
    key: req.pathParameters.issueKey
  })

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `praise cage deleted`
  }
}