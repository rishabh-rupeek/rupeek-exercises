const transform = x =>{
    return x*x;
}

const sum = (x,y,transform) =>{
    return transform(x) + transform(y);
}

console.log(sum(2,3,transform));