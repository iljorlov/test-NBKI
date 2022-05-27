import { mount, enableAutoUnmount } from "@vue/test-utils";
import TableComponent from "@/components/Table/TableComponent.vue";
import generateRandomTable from "@/helpers/generateRandomTable";

enableAutoUnmount(afterEach);

describe("TableComponent.vue", () => {
  const dummyHeaders = ["header 1", "header 2", "header 3", "header4"];

  it("renders table", () => {
    const wrapper = mount(TableComponent, {});
    expect(wrapper.find("table").exists()).toBe(true);
  });
  it("renders table headers", () => {
    const wrapper = mount(TableComponent, {
      props: {
        tableHeaders: dummyHeaders,
        tableData: generateRandomTable(4),
      },
    });
    const table = wrapper.findComponent(TableComponent);
    expect(table.exists()).toBe(true);
    dummyHeaders.forEach((header) => {
      expect(table.text()).toMatch(header);
    });
  });
  it("renders table data", () => {
    const dummyData = generateRandomTable(10);
    const wrapper = mount(TableComponent, {
      props: {
        tableHeaders: dummyHeaders,
        tableData: dummyData,
      },
    });
    const table = wrapper.findComponent(TableComponent);
    expect(table.exists()).toBe(true);
    dummyData.forEach((item) => {
      const valuableData = [item.name, item.quantity, item.price];
      valuableData.forEach((val) => {
        expect(table.text()).toMatch(`${val}`);
      });
    });
  });
});
