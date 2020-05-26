
//ADD
function add(a, b) {
   return a + b
}

console.log(add(2, 4))

//MULTIPLY

function multiply(a, b) {

   let total = 0

   for (let index = 0; index < a; index++) {

      total = add(total, b)

   }
   return total

}
console.log(multiply(6, 4));
console.log(multiply(2, 5));
console.log(multiply(7, 9));
console.log(multiply(4, 4));

//Power/Exponentiation 


function power(x, n) {
   let total = 1;
   for (index = 0; index < n; index = index + 1) {
      total = multiply(total, x)
   }
   return total;
}
console.log(power(2, 8));
console.log(power(3, 4));
console.log(power(9, 4));



//Factorial
function Factorial(n) {
   let total = 1;
   for (var index = 1; index <n; index = index + 1) {
      total = multiply(total, index)
   }
   return total;
}
console.log(Factorial(5))

//Fibonacci

function Fibonacci(n) {
   let total = 0;
   let a = 1;
   let b = 1;
   for (let index = 2; index < n; index = index + 1) {
      b = add(total, a)
      total = a;
      a = b;
   }
   return b;
}
console.log(Fibonacci(8));