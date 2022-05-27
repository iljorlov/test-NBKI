const getRandomFloat = (maxIncluding = 1000): number => {
  const randomFloat = (Math.random() + 0.01) * maxIncluding;
  return randomFloat > 1000 ? 1000.0 : randomFloat;
};

export default getRandomFloat;
