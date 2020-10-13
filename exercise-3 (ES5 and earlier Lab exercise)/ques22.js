const sum = (x,y) => {
    return x+y;
}

const bindedFunc = sum.bind({x:10})
console.log(bindedFunc(5));

const bindedFunc2 = sum.bind({x:10,y:20})
//console.log(bindedFunc2);
console.log(bindedFunc2());