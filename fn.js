// basic function
function sayHello() {
  console.log('Hello Guys!');
}
sayHello();

// return function
function kasihHuruf() {
  return "A";
}
var hurufnya = kasihHuruf();
console.log(hurufnya);

// function with params
function tambahLima(angka) {
  return angka + 5;
}
console.log(tambahLima(10));

// function with more 1 params
function countTriangle(alas, tinggi) {
  var luas = 0.5 * (alas * tinggi);
  return luas;
}
console.log(countTriangle(5, 5));