var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
numbers.sort(function(x,y){
    return x-y;
});

console.log(numbers);

numbers.sort(function(x,y){
    return y-x;
})

console.log(numbers);

numbers.push(37);
numbers.pop();
numbers.pop();

numbers.splice(3,2,['Seven','Eleven']);
console.log(numbers);

console.log(numbers.indexOf(23,0));
console.log(numbers.indexOf(41,0));