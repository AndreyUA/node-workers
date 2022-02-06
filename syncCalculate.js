import { calculateFibonacci } from "./fibo.js";

const start = new Date();

for (let i = 0; i < 90_000_000; i++) {
  calculateFibonacci(100);
}

const finish = new Date();

console.log(`Sync process finished in ${finish - start} miliseconds`);
