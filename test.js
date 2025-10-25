const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {return number * number; });
console.log(exponentialNumbers);


function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + " came first.");