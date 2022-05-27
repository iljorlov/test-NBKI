export const shuffleString = (s: string): string => {
  const len = s.length;
  const splitString = s.split("");
  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [splitString[i], splitString[j]] = [splitString[j], splitString[i]];
  }

  return splitString.join("");
};
