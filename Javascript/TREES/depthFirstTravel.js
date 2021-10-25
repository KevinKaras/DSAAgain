//  ITERATIVE


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

function depthFirstValuesIterative(root){
    if(root === null){
        return []
    }
    let finalArr = []
    let stack = [ root ];
    while(stack.length > 0){
        let current = stack.pop()
        
        finalArr.push(current)
        if(current.right) stack.push(current.right)
        if(current.left)  stack.push(current.left)
    }

    return finalArr
}
console.log(depthFirstValuesIterative(a))


// RECURSIVE

function depthFirstValues(root){

    if(root === null) return []

    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)

    return [root.val, ...leftValues, ...rightValues]
}

