const exponentFactory = x =>{
    const square = x => x*x ;
    const cube = x => x*x*x ;

    if(x===2) return square;
    else if(x==3) return cube;
    else return number = x => x;
}

var fn;
fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;
fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;
fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;