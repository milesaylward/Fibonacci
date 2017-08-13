export const RecursiveArrayCode = `
  const fibArrayFunc = (n) => {
    if (n < 2) {
      return [0, 1];
    }
    //recursively call this.fibArray function as long as n is not less than 2
    //and set fib array variable to [0, 1] once it is
    const fibArray = fibArrayFunc(n - 1);

    //push the sum of the previous 2 Fibonacci at the end of the array
    fibArray.push(fibArray[n - 1] + fibArray[n - 2]);
    return fibArray;
  }
`;

export const RecursiveCode = `
  const fibRecursiveFunc = (n) => {
    if (n <= 1) return 1;
    //similar to the RecursiveArray this function calls itself
    //until the number provided n reaches 1
    return fibRecursiveFunc(n - 1) + fibRecursiveFunc(n - 2);
  }
`;

export const MemoizedCode = `
  const fibMemoizedFunc = (n, cache) => {
    //the cache holds all fibonacci numbers that have already been
    //calculated and are accessed by their index in the object cache[n]
    cache = cache || {};

      // if a number already exists it simply returns it rather than calculating it again
      //this allows the recursive function with memoization to have a complexity of O(2N)
      //as opposed to the pure recursive which has a complexity of O(2^N) making the pure
      // much more complex as it is exponentially growing.
      if (cache[n]) return cache[n];
      if (n <= 1) return 1;

      return cache[n] = fibMemoizedFunc(n - 1, cache) + fibMemoizedFunc(n - 2, cache);
  }
`;

export const WhileCode = `
  const fibWhileFunc = (n) => {
    var a = 1, b = 0, temp;
    //less elegant solution that requires the use of multiple
    //variables to track the values as you loop through the fibonacci sequence
    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }

    return b;
  }
`;
