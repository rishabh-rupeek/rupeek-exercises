var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' 
    },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
    ];

const names = [];
phones.forEach((phone,index)=>{
    names.push(phone.name)
});
console.log(names);

const phones440 = phones.filter((phone,index)=>{
    if(phone.price>440) return true;
    else return false;
})

console.log(phones440);