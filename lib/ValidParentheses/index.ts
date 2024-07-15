export function validParentheses(s: string): boolean {
  if (s.length < 2) {
    return false;
  }
  let stack = [];
  let matchingBrackets = new Map();
  matchingBrackets.set('{', '}');
  matchingBrackets.set('(', ')');
  matchingBrackets.set('[', ']');

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (matchingBrackets.has(char)) {
      stack.push(char);
    } else {
      let lastOpen = stack.pop();
      if (matchingBrackets.get(lastOpen) !== char) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }

  return true;
}