import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");

console.log("This is main thread");