import { Worker, BroadcastChannel } from "worker_threads";

const broadcastChannel = new BroadcastChannel("fibo");

const _worker1 = new Worker("./worker.js", {
  workerData: {
    number: 1,
    fibo: 100,
  },
});

const _worker2 = new Worker("./worker.js", {
  workerData: {
    number: 2,
    fibo: 100,
  },
});

const _worker3 = new Worker("./worker.js", {
  workerData: {
    number: 3,
    fibo: 100,
  },
});

let counter = 0;

broadcastChannel.onmessage = (msg) => {
  counter++;
  console.log(msg.data.message);

  if (3 === counter) {
    console.log(
      `All calculation (90_000_000 iterations) in 3 threads finished in ${msg.data.time} miliseconds`
    );
  }
};
