
// let tree = tree_root.children;

function getName(tree_root){
    if(tree_root.children){

        let tree = tree_root.children;
        // debugger
          let count = tree.length;
          
          if(count){
      
          for (let i = 0; i < count; i++) {
              const element = tree[i];
              
              
                  console.log(element.name)
                  getName(element)
      
              
              
      
              
          }
      }
        
    }
   


}