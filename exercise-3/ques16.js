const sumArray = (arr,func) => {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+func(arr[i]);
    }
    return sum;
}

const square = x => x*x ;
const cube = x => x*x*x ;

console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36