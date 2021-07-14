function add(x, y) {
    return x + y;
  } 

console.log(add(1, 80));

function subtract(x, y) {
    return x - y;
  } 

console.log(subtract(60, 40));

function multiply(x, y) {
    return x * y;
  } 

console.log(multiply(2, 3.4));

function divide(x, y) {
    return x / y;
  } 

console.log(divide(5.0, 2.5));

function increment(x) {
    let number = x;
    x++;
    return x;
  } 

console.log(increment(4));

function decrement(x) {
    let number = x;
    x--;
    return x;
  } 

console.log(decrement(6));

function makeInt(string){
    let x = parseInt(string, 10);
    return x;

}

console.log(makeInt(`2`));

function preserveDecimal(string){
    let x = parseFloat(string);
    return x;
}
console.log(preserveDecimal(`2.667`));