import { calculateFibonacci } from "./fibo.js";

const start = new Date();

for (let i = 0; i < 30_000_000; i++) {
  calculateFibonacci(100);
}

for (let i = 0; i < 30_000_000; i++) {
  calculateFibonacci(100);
}

for (let i = 0; i < 30_000_000; i++) {
  calculateFibonacci(100);
}

const finish = new Date();

console.log(
  `Sync calculation (90_000_000 iterations) finished in ${
    finish - start
  } miliseconds`
);
