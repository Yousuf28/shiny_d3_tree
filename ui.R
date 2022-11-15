## ui.R ##
ui <- htmlTemplate("template.html",
    button = actionButton("action", "Action"),
    slider = sliderInput("x", "X", 1, 100, 50),
    d3 = htmltools::includeScript("www/d3.v3.min.js"),
    shiny_app = htmltools::includeScript("www/shiny_app.js"),
    dnd = htmltools::includeScript("www/dndTree.js"),
    d3_context = htmltools::includeScript("www/d3-context-menu.js"),
    under_score = htmltools::includeScript("www/underscore-min.js"),
    jq = htmltools::includeScript("www/jquery.js"),
    fast_click = htmltools::includeScript("www/fastclick.js"),
    foundation = htmltools::includeScript("www/foundation.min.js"),
    d3_css = htmltools::includeCSS("www/d3-context-menu.css"),
    foundation_css = htmltools::includeCSS("www/foundation.css"),
    app_css = htmltools::includeCSS("www/app.css"),
)

server  <- function(input, output, session) {

	js_data <- shiny::reactive({
		json_data <- jsonlite::fromJSON("www/benefit.json")
		to_json <- jsonlite::toJSON(json_data)
		# print(to_json)
		to_json
	})

	shiny::observe({
		session$sendCustomMessage("json_data", js_data())
	})

}

shiny::shinyApp(ui,server)
