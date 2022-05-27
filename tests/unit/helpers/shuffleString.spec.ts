import { shuffleString } from "../../../src/helpers/shuffleString/shuffleString";

describe("shuffleString", () => {
  it("generates a new string which is not equal to the original one", () => {
    const word1 = "randomstring";
    expect(shuffleString(word1)).toHaveLength(word1.length);
  });
});
