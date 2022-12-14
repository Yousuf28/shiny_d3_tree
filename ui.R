## ui.R ##
library(shiny)


ui <- htmlTemplate("template.html",
    upload_json = shiny::fileInput("json_file", label = "Upload json file", accept = c(".json")),
    create_tree = shiny::actionButton("create_tree", "Create Tree"),
    button = actionButton("down_button", "Download PNG"),
    button_svg = actionButton("down_button_svg", "Download SVG"),
    get_text = actionButton("get_node_text", "print node text"),
    slider = sliderInput("x", "X", 1, 100, 50),
    all_text = verbatimTextOutput("disp_node_text"),
    d3 = htmltools::includeScript("www/d3.v3.min.js"),
    shiny_app = htmltools::includeScript("www/shiny_app.js"),
    dnd = htmltools::includeScript("www/dndTree.js"),
    d3_context = htmltools::includeScript("www/d3-context-menu.js"),
    under_score = htmltools::includeScript("www/underscore-min.js"),
    jq = htmltools::includeScript("www/jquery.js"),
    fast_click = htmltools::includeScript("www/fastclick.js"),
    foundation = htmltools::includeScript("www/foundation.min.js"),
    download_svg = htmltools::includeScript("www/svgDownload.js"),
    file_saver = htmltools::includeScript("www/FileSaver.js"),
    canvas_js = htmltools::includeScript("www/canvas-to-blob.js"),
    flatted_js = htmltools::includeScript("www/flatted.min.js"),
    d3_css = htmltools::includeCSS("www/d3-context-menu.css"),
    foundation_css = htmltools::includeCSS("www/foundation.css"),
    app_css = htmltools::includeCSS("www/app.css"),
)

server  <- function(input, output, session) {

	js_data <- shiny::eventReactive(input$create_tree,{
        req(input$json_file)
        file <- input$json_file$datapath
		json_data <- jsonlite::fromJSON(file)
		to_json <- jsonlite::toJSON(json_data)
        to_json
		# print(to_json)
		
	})
    info <- reactive({
        data <- js_data()
        click_ac <- input$down_button_svg
        send_info <- list(data=data, info=click_ac)
        send_info
    })

	shiny::observe({
		session$sendCustomMessage("json_data", info())
	})
	shiny::observe({
		session$sendCustomMessage("json_data_print", js_data())
	})

    shiny::observe({
        req(input$down_button)
        session$sendCustomMessage("down_tree_png", input$down_button)
    })
    shiny::observe({
        req(input$down_button_svg)
        session$sendCustomMessage("down_tree_svg", input$down_button_svg)
    })

    observeEvent(input$down_button_svg,{
        req(input$current_tree)
        # tree <- jsonlite::fromJSON(input$current_tree)
        # saveRDS(tree, "file_tree.rds")
        print(input$current_tree)
       
    })

       shiny::observe({
        req(input$get_node_text)
        session$sendCustomMessage("node_text", input$get_node_text)
    })

    shiny::observeEvent(input$get_node_text, {
        # req(input$current_node_text)
        print(input$current_node_text)
        
    })
    output$disp_node_text <- shiny::renderPrint({
        req(input$current_node_text)
        input$current_node_text
    })

}

shiny::shinyApp(ui,server)
