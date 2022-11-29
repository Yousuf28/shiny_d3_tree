library(shiny)
library(rhandsontable)

ui <- fluidPage(
    htmltools::includeCSS("style.css")
    ,
  rHandsontableOutput('table')
  
)

server <- function(input,output,session)({
  
  output$table <- renderRHandsontable({
    rhandsontable(mtcars, rowHeaderWidth = 200)
  })
  
  
}) 

shinyApp(ui = ui, server = server)