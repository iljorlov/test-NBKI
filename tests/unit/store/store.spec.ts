import { rootState } from "@/store";

describe("rootStore", () => {
  it("has correct structure", () => {
    expect(rootState).toHaveProperty("tableData");
  });
});
