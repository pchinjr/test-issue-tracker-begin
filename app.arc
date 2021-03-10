@app
issue-tracker

@http
get /
get /testIssues

@scheduled
issues rate(1 day)

@tables
data
  scopeID *String
  dataID **String
  ttl TTL