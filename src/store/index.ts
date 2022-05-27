import generateRandomTable from "@/helpers/generateRandomTable";
import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  MutationTree,
  ActionTree,
} from "vuex";
import { TableEntryType } from "./types";

export interface IRootState {
  tableData: TableEntryType[];
}

export const rootState: IRootState = {
  tableData: [],
};

export enum RootMutationsEnum {
  SET_TABLE_DATA = "setTableData",
}

export const rootMutations: MutationTree<IRootState> = {
  [RootMutationsEnum.SET_TABLE_DATA](state, payload: TableEntryType[]) {
    state.tableData = payload;
  },
};

export enum RootActionsEnum {
  POPULATE_TABLE_RANDOMLY = "populateTableRandomly",
}

export const rootActions: ActionTree<IRootState, IRootState> = {
  [RootActionsEnum.POPULATE_TABLE_RANDOMLY]: (ctx, n: number) => {
    ctx.commit(RootMutationsEnum.SET_TABLE_DATA, generateRandomTable(n));
  },
};

export default createStore({
  state: rootState,
  getters: {},
  mutations: rootMutations,
  actions: rootActions,
  modules: {},
});

export const key: InjectionKey<Store<IRootState>> = Symbol();

// "useStore" composition function
export function useStore() {
  return baseUseStore(key);
}
