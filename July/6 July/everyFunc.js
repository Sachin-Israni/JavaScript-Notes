
// ------------------------------------------------------ every()  


function evreyFunc(a, callBack) {
    if (a == callBack) {
        return true
    }
    else {
        return false
    }
}

function fun(val) {
    return val
}

let bfunc = fun(10)

console.log(bfunc);

console.log(evreyFunc(10, bfunc));
