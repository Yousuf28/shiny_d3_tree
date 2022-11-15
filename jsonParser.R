library(jsonlite)
br <- jsonlite::fromJSON("www/benefit.json")
jsonlite::toJSON(br)
bn <- jsonlite::parse_json("www/benefit.json")
