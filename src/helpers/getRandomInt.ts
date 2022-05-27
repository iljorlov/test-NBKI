const getRandomInt = (maxInlcuding = 100): number => {
  const min = 1;
  const max = Math.floor(maxInlcuding);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default getRandomInt;
