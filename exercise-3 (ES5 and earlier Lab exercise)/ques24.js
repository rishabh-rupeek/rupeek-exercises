var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

days.forEach((day,index)=>{
    console.log(day);
})

const arr = days.map((day,index)=>day.length);
console.log(arr);

const daysWithStoZ = days.filter((day,index)=>{
    if(day[0]>='S' && day[0]<='Z') return true;
    else return false;
})

console.log(daysWithStoZ);

const daysWith6Letters = days.filter((day,index)=>{
    if(day.length === 6) return true;
    else return false;
})

console.log(daysWith6Letters);