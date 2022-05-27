const round = (value: number, precision: number) => {
  if (Number.isInteger(precision)) {
    const shift = Math.pow(10, precision);
    return Math.round(value * shift + 0.00000000000001) / shift;
  } else {
    return Math.round(value);
  }
};

export const formatFloatTo2Precision = (n: number): string => {
  const rounded = round(n, 2);
  const splitRounded = rounded.toString().split(".");
  if (splitRounded.length === 1) {
    return `${rounded}.00`;
  }
  if (splitRounded.length === 2 && splitRounded[1].length === 1) {
    return `${rounded}0`;
  }

  return rounded.toString();
};
