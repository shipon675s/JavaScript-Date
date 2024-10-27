//! JavaScript Dates:
const myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
    weekday: 'short',
    weekday: 'narrow',
}));

let updateDate = new Date(2024, 10, 27, 12, 0);
console.log(updateDate);



