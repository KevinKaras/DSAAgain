var findCenter = function(edges) {
    
    let mapping = {
    }
    
    for(let i = 0; i < edges.length; i++){
        
        let cur = edges[i]             // [1,2]x   [2,3]x [4,2]x 
        
        let node = cur[0]              // 1  node
        
        let pointer = cur[1]           // 2   pointer
        
        
        if(node in mapping){
            mapping[node] += 1
            
        }
        if(!(node in mapping)){
            mapping[node] = 1
            
        }
        
        
        
        
        if(pointer in mapping){
            mapping[pointer] += 1
        }
        if(!(pointer in mapping)){
            mapping[pointer] = 1
        }
        
    }
    console.log(mapping)
    
    let sorted1 = Object.entries(mapping).sort((prev, next) => prev[1] - next[1])
    console.log(sorted1)
    let result = sorted1.pop()
    return result[0]
    
    
    
};
// [[1,2],[2,3],[4,2]]    -> 2.  BECAUSE 2 IS PRESENT IN EVERY OTHER ARRAY 


//     iterate the first outer array 
//         grab the current 