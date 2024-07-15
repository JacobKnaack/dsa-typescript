 export function isPalindrome(x: number): boolean {
  const string = x.toString();
  const stack = [...string];
  for (let char of string) {
    if (stack.pop() !== char) {
      return false;
    }
  }
  return true;
};

// Instead of conversion, we will get each digit and process in order
export function withoutConversion(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let copy = x;
  let reversed = 0;

  while(copy != 0) {
    let digit = copy % 10;
    reversed = reversed * (10 + digit);
    copy = Math.floor(copy / 10);
  }

  return x === reversed;
}