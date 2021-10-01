

function findWrongDiv(str){

    let openers = {
        "<div>" : 1,
        "<p>" : 2,
        "<b>" : 3,
        "<em>": 4,
        "<i>" : 5
    }
    
    let closers = {
        "</div>" : 1,
        "</p>" : 2,
        "</b>" : 3,
        "</em>": 4,
        "</i>" : 5,



    }
    
    let stackOfDivs = []; 
    let keys = Object.keys(openers)
    let rearKeys = Object.keys(closers)
    for(key in keys){
        console.log("checker:",keys[key])
        if(str.includes(keys[key])){
            console.log("string now: ", str)
            let curDiv = str.slice(0,keys[key].length)
            console.log("curdiv", curDiv)
            stackOfDivs.push(curDiv)
            let trailingStr = str.slice(keys[key].length, str.length);
            
            str = trailingStr
            
            
        }


        
    }
    for(let i = 0; i < stackOfDivs.length; i++){
        console.log(stackOfDivs[i])



    }
    

}

findWrongDiv("<div><b><i></i></b></div>")



