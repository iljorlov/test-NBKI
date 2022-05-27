import {
  getRandomStringRussian,
  russianLetters,
} from "../../../src/helpers/getRandomRussianString/getRandomStringRussian";

describe("getRandomRussianString", () => {
  it("generates a string of correct length consisting of Russian letters", () => {
    expect(getRandomStringRussian(5)).toHaveLength(5);

    const testString = getRandomStringRussian(10);
    testString.split("").forEach((letter) => {
      expect(russianLetters).toContain(letter);
    });
  });
});
