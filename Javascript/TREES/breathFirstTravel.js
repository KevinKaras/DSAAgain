class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//  ITERATIVE


function breathFirstTravelIterative(root){
    if(root === null){
        return []
    }
    let finalArr = []
    let queue = [ root ]
    while(queue.length > 0){

        let current = queue.pop()
        finalArr.push(current)

        if(current.right) queue.unshift(current.right)
        if(current.left)  queue.unshift(current.left)


    }
    return finalArr
}

console.log(breathFirstTravelIterative(a))



// Change this so that the terminal just holds node values and not the node itself. Super easy. 