const john={
    name:'john',
    age:10
}
const jane={
    name:'jane',
    age:10
}

console.log(john.age);

jane.age++;
console.log(jane);

john.address={
    'first line':'Kirti Nagar',
    city:'New Delhi'
}

console.log(john.address.city);

john.spouse=jane;
jane.spouse=john;

jane.emailids=[
    'jane@gmail.com',
    'jane@rupeek.com'
]

console.log(jane.emailids[1]);

jane.emailids[1]='jane@yahoo.com';
console.log(jane.emailids[1]);

jane.emailids.push(
    'jane@apple.com'
)

console.log(jane);

function celebrateBirthdayOfPerson(){
    this.age++;
}

// john.celebrateBirthday = jane.celebrateBirthday = function(){
//     this.age++;
// }

john.celebrateBirthday = jane.celebrateBirthday = celebrateBirthdayOfPerson;

john.celebrateBirthday();
console.log(john.age);

jane.celebrateBirthday();
console.log(jane.age);