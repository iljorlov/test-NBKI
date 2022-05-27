import shuffleString from "../shuffleString";

export const getRandomStringRussian = (len = 5): string => {
  return shuffleString(russianLetters).slice(0, len);
};

export const russianLetters = "йцукенгшщзхъфывапролджэячсмитьбю";
