//! Date
const d = new Date(2024, 7,  19, 4, 19);  // Date start to 0.
console.log(d);

//! .toDateString
const x = new Date(2024, 7, 14);
const y = x.toDateString();
console.log(y);

//! .ISOString
const n = new Date();
const m = n.toISOString();  // International Format
console.log(m);
