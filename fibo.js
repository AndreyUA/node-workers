export const calculateFibonacci = (num) => {
  let a = 1;
  let b = 1;

  for (let i = 4; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};
