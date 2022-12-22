
var tree_obj = {
    "name": "Benefit_Risk",
 
        "children": [{
            "name": "Benefits",
            "children": [{
                "name": "Benefit category 1",
				"children":[{
					"name": "Primary efficacy outcome"
				},
				{"name": "Secondary efficacy outcome"}
			]
            }, {
                "name": "Benefit category 2",
				"children":[{
					"name": "Tertiary efficacy outcome"
				}]
            }
		]
        }, {
            "name": "Risks",
            "children": [{
                "name": "Risk category 1",
				"children":[
					{
						"name": "principal safety outcome"
					}
				]
            }, {
                "name": "Risk category 2",
				"children": [
					{
						"name": "Adverse event 1"
					},
					{
						"name": "Adverse event 2"
					},
					{
						"name": "Adverse event 3"
					}
				]
            }
		]
        }]
    
}



// var all_nodes = [];
// function getName(tree_root){
//     console.log(tree_root.name)
//     all_nodes.push(tree_root.name)
    
//     if(tree_root.children){

//         let tree = tree_root.children;
//         // debugger
//           let count = tree.length;
          
//           if(count){
      
//           for (let i = 0; i < count; i++) {
//               const element = tree[i];
              
              
//                 //   console.log(element.name, element.id)
//                 //   all_nodes.push(element.name)
//                   getName(element)
      
              
              
      
              
//           }
//       }
        
//     }
// }

var all_nodes = {
"name": "",
"children": []

};

var count_iter = 0;
function getName(tree_root){
    console.log(tree_root.name)
    
    
    if(tree_root.children){
        

        let tree = tree_root.children;
        // debugger
          let count = tree.length;
          console.log(count)
          
          if(count){
           
      
          for (let i = 0; i < count; i++) {
              const element = tree[i];
              
              
                //   console.log(element.name, element.id)
                //   all_nodes.push(element.name)
                // all_nodes.children[i] = {"name": element.name};
                count_iter++
                // console.log(count_iter)
                  getName(element)
      
              
              
      
              
          }
      }
        
    }
}
getName(tree_json)

console.log(all_nodes)



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

var tree_obj = {
    "name": "Benefit_Risk",
 
        "children": [{
            "name": "Benefits",
            "children": [{
                "name": "Benefit category 1",
				"children":[{
					"name": "Primary efficacy outcome"
				},
				{"name": "Secondary efficacy outcome"}
			]
            }, {
                "name": "Benefit category 2",
				"children":[{
					"name": "Tertiary efficacy outcome"
				}]
            }
		]
        }, {
            "name": "Risks",
            "children": [{
                "name": "Risk category 1",
				"children":[
					{
						"name": "principal safety outcome"
					}
				]
            }, {
                "name": "Risk category 2",
				"children": [
					{
						"name": "Adverse event 1"
					},
					{
						"name": "Adverse event 2"
					},
					{
						"name": "Adverse event 3"
					}
				]
            }
		]
        }]
    
}