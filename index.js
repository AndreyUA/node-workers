import { Worker } from "worker_threads";

const worker1 = new Worker("./worker.js", {
  workerData: {
    number: 1,
    fibo: 100,
  },
});

const worker2 = new Worker("./worker.js", {
  workerData: {
    number: 2,
    fibo: 100,
  },
});

const worker3 = new Worker("./worker.js", {
  workerData: {
    number: 3,
    fibo: 100,
  },
});

console.log("This is main thread");
