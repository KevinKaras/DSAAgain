
let list1 = [1,2,4,6]
let list2 = [0,1,1,3,6]





function mergeTwo(l1, l2){

    let i = 0;
    let j = 0;
    let resultArr = []
    while(i < l1.length && j < l2.length){

        if(l1[i] < l2[j]){
            resultArr.push(l1[i])
            i++

        } else {
            resultArr.push(l2[j])
            j++
        }


    }
    return resultArr;
}

console.log(mergeTwo(list1, list2))