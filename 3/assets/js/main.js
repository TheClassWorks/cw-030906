let users = [
  { id: 1, name: "sadegh", family: "mokhtari", age: 15, email: "sadegh@mail.ir" },
  { id: 2, name: "sara", family: "alavi", age: 15, email: "sara@mail.ir" },
  { id: 3, name: "ali", family: "mokhtari", age: 45, email: "ali@mail.ir" },
];

let fname = prompt("Enter your name: ");
let lname = prompt("Enter your family: ");
let sen = +prompt("Enter your age: ");
let email = prompt("Enter your email: ");

if (fname.length < 3 || fname.length > 10) {
  console.log("طول نام بین 3 تا 10 کاراکتر");
} else if (lname.length < 3 || lname.length > 15) {
  console.log("طول فایملی بین 3 تا 15 کاراکتر");
} else if (sen.length > 3 || isNaN(sen)) {
  console.log("سن اشتباه وارد شده");
} else {
  let newuser = { id: 4, name: fname, family: lname, age: sen, email: email };
  users.push(newuser);
}

console.log(users);
