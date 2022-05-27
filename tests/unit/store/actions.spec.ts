import { RootActionsEnum, rootActions, IRootState } from "@/store/index";
import { ActionContext, Commit } from "vuex";

describe("actions", () => {
  it(`${RootActionsEnum.POPULATE_TABLE_RANDOMLY} populates table`, () => {
    const numData = 10;

    const state: IRootState = { tableData: [] };
    const ctx: ActionContext<IRootState, IRootState> = {
      commit: jest.fn((a, b) => {
        ctx.state.tableData = b;
      }) as unknown as Commit,
      dispatch: jest.fn(),
      state: state,
      getters: {},
      rootGetters: {},
      rootState: state,
    };

    const populateAction = rootActions[
      RootActionsEnum.POPULATE_TABLE_RANDOMLY
    ] as (ctx: ActionContext<IRootState, IRootState>, n: number) => void;

    populateAction(ctx, numData);
    expect(ctx.commit).toHaveBeenCalled();
    expect(ctx.state.tableData.length).toBe(numData);
  });
});
