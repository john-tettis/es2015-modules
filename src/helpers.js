function choice(arr){
    let index = Math.floor(arr.length*Math.random())
    return arr[index]
}

function remove(items, item){
    let arr = items.filter((it)=>item !== it)
    if(arr.length !== items.length){
        return arr
    }
}


export {choice, remove}