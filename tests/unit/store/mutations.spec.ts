import generateRandomTable from "@/helpers/generateRandomTable";
import { RootMutationsEnum, rootMutations, IRootState } from "@/store/index";

describe("mutations", () => {
  it(RootMutationsEnum.SET_TABLE_DATA, () => {
    const numValues = 10;
    // mock state
    const state: IRootState = { tableData: [] };
    // apply mutation
    rootMutations[RootMutationsEnum.SET_TABLE_DATA](
      state,
      generateRandomTable(numValues)
    );
    // assert result
    expect(state.tableData.length).toBe(numValues);
    expect(state.tableData.length).not.toBe(numValues * numValues);
  });
});
