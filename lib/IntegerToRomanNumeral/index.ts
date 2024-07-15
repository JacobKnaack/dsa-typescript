const numberMap = {
  1: 'i',
  4: 'iv',
  5: 'v',
  9: 'ix',
  10: 'x',
  40: 'xl',
  50: 'l',
  90: 'xc',
  100: 'c',
  400: 'cd',
  500: 'd',
  900: 'cm',
  1000: 'm'
};

const getFactor = (num: number): number => {
  if (num >= 1000) return 1000;
  if (num >= 900) return 900;
  if (num >= 500) return 500;
  if (num >= 400) return 400;
  if (num >= 100) return 100;
  if (num >= 90) return 90;
  if (num >= 50) return 50;
  if (num >= 40) return 40;
  if (num >= 10) return 10;
  if (num >= 9) return 9;
  if (num >= 5) return 5;
  if (num >= 4) return 4;
  return 1;
};

const getDigits = (num: number): Array<number> => {
  let tuple = new Array(4).fill(0);
  let position = 3;
  let current = num;

  while (current && position >= 0) {
    let digit = current % 10;
    tuple[position] = digit;
    current = Math.floor(current / 10);
    position--;
  }
  return tuple;
};

export function integerToNumeral(num: number): string {

  let digitValues = getDigits(num);
  if (digitValues[0]) digitValues[0] *= 1000;
  if (digitValues[1]) digitValues[1] *= 100;
  if (digitValues[2]) digitValues[2] *= 10;

  const convertDecimal = (decimal: number, map: {[key: number]: string}) => {
    let numeral = '';
    if (!decimal) {
      return numeral;
    }
    if (map[decimal]) return map[decimal];

    let current = decimal;

    while (current) {
      let factor = getFactor(current);
      numeral += map[factor];
      current -= factor;
    }
    return numeral;
  };

  let result = '';
  for (let digit of digitValues) {
    result += convertDecimal(digit, numberMap);
  }

  return result.toUpperCase();
}