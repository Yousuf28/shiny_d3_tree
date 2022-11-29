library(jsonlite)
br <- jsonlite::fromJSON("www/benefit.json", simplifyVector = FALSE)
jsonlite::toJSON(br)
bn <- jsonlite::parse_json("www/benefit.json")
br
jsonlite::prettify(br)

br$children[[1]]$name
