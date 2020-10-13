function foo(){
    console.log(this);
}

foo();

function foo2(){
    console.log(this);
}

foo2.bind({x:1});
