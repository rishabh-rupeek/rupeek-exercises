const foo2 = foo1 =>{
    foo1();
}

const foo1 = () =>{
    console.log('Hey');
}

foo2(foo1);