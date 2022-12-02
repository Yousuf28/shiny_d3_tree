
// let tree = tree_root.children;
var all_nodes = [];
function getName(tree_root){
    
    if(tree_root.children){

        let tree = tree_root.children;
        // debugger
          let count = tree.length;
          
          if(count){
      
          for (let i = 0; i < count; i++) {
              const element = tree[i];
              
              
                  console.log(element.name)
                  all_nodes.push(element.name)
                  getName(element)
      
              
              
      
              
          }
      }
        
    }

   


}



// Shiny.addCustomMessageHandler("down_tree_svg", function(data){
// let data = data;
// let node_text = document.getElementsByClassName("nodeText");
// let all_text = []
// for (let i = 0; i < node_text.length; i++) {
//     all_text[i] = node_text[i].innerHTML
    
// }
//  Shiny.setInputValue("current_node_text", all_text, {priority : "event"})

// }
// )