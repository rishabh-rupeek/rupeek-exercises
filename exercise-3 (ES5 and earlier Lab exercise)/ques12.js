const sumSquares = arr =>{
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum= sum + arr[i]*arr[i];
    }
    return sum;
}

let arr = [1,2,3];
console.log(sumSquares(arr));