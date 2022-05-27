import {
  enableAutoUnmount,
  mount,
  shallowMount,
  VueWrapper,
} from "@vue/test-utils";
import TableApp from "@/components/TableApp.vue";
import { ActionTree, createStore, Store } from "vuex";
import {
  IRootState,
  rootActions,
  RootActionsEnum,
  RootMutationsEnum,
  rootState,
} from "@/store";
import { sleep } from "@/helpers/sleep";
import generateRandomTable from "@/helpers/generateRandomTable";
import { TableEntryType } from "@/store/types";
enableAutoUnmount(afterEach);

describe("TableApp", () => {
  let actions: ActionTree<IRootState, IRootState>;
  let store: Store<IRootState>;
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    actions = {
      [RootActionsEnum.POPULATE_TABLE_RANDOMLY]: jest.fn(),
      actionInput: jest.fn(),
    };
    store = createStore({
      actions: {
        [RootActionsEnum.POPULATE_TABLE_RANDOMLY]: jest.fn(
          () => (store.state.tableData = generateRandomTable(50))
        ),
      },
      state: rootState,
    });
    wrapper = mount(TableApp, {
      global: {
        plugins: [store],
      },
    });
  });

  it("renders app", () => {
    const wrapper = shallowMount(TableApp, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("fetches data when button is clicked", async () => {
    const numTableItems = 50;
    const defaultText = "Загрузить данные";
    const table = wrapper.find("table");
    expect(table.exists()).not.toBe(true);
    const loadBtn = wrapper
      .findAll("button")
      .find((i) => i.text() === defaultText);

    if (loadBtn) {
      expect(loadBtn.exists()).toBe(true);
      loadBtn.trigger("click");
      await wrapper.vm.$nextTick();
      expect(store.state.tableData).toBeDefined();
      expect(store.state.tableData.length).toBe(50);
      await sleep(1500);
      await wrapper.vm.$nextTick();
      const table = wrapper.find("table");
      expect(table.exists()).toBe(true);

      expect(table.findAll("tr").length).toBeGreaterThanOrEqual(numTableItems);
    }
  });
  it("refetches data when refetch button is clicked", async () => {
    const numTableItems = 50;
    const defaultText = "Загрузить данные";
    const table = wrapper.find("table");
    expect(table.exists()).not.toBe(true);
    const loadBtn = wrapper
      .findAll("button")
      .find((i) => i.text() === defaultText);

    if (loadBtn) {
      expect(loadBtn.exists()).toBe(true);
      loadBtn.trigger("click");
      await wrapper.vm.$nextTick();
      expect(store.state.tableData).toBeDefined();
      expect(store.state.tableData.length).toBe(50);
      await sleep(1500);
      await wrapper.vm.$nextTick();
      const table = wrapper.find("table");
      expect(table.exists()).toBe(true);

      expect(table.findAll("tr").length).toBeGreaterThanOrEqual(numTableItems);
    }
    await wrapper.vm.$nextTick();

    const refetchButton = wrapper.find({ ref: "refetchButton" });
    expect(refetchButton.exists()).toBe(true);
    refetchButton.trigger("click");
    await sleep(600);
    // table disappears
    let refetchedTable = wrapper.find("table");
    expect(refetchedTable.exists()).not.toBe(true);

    await sleep(1500);
    // table is rendered again
    refetchedTable = wrapper.find("table");
    expect(refetchedTable.exists()).toBe(true);

    expect(refetchedTable.findAll("tr").length).toBeGreaterThanOrEqual(
      numTableItems
    );
  });
});
