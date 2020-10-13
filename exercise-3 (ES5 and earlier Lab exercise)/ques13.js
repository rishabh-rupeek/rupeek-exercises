var contains = (arr, x) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x) return true;
    }
    return false;
}

console.log( contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
console.log( contains( [ 1, 2, 3, 4 ], 5 ) ); // prints false