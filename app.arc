@app
issue-tracker

@http
get /
get /testIssues

post /api/delete/:issueKey

@scheduled
issues rate(1 day)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL