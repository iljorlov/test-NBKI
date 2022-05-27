import generateRandomTable from "@/helpers/generateRandomTable";

describe("generateRandomTable", () => {
  it("generates a table of correct size", () => {
    expect(generateRandomTable(5)).toHaveLength(5);
  });
});
