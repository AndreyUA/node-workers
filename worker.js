import { workerData, BroadcastChannel } from "worker_threads";

import { calculateFibonacci } from "./fibo.js";

const broadcastChannel = new BroadcastChannel("fibo");

const start = new Date();

for (let i = 0; i < 30_000_000; i++) {
  calculateFibonacci(100);
}

const finish = new Date();

broadcastChannel.postMessage({
  message: `Worker number ${
    workerData.number
  }. Calculation (30_000_000 iterations) finished in ${
    finish - start
  } miliseconds`,
  time: finish - start,
});
