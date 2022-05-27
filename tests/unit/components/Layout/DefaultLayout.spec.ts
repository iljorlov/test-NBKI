import { enableAutoUnmount, mount } from "@vue/test-utils";
import DefaultLayout from "@/components/Layout/DefaultLayout.vue";
import TableApp from "@/components/TableApp.vue";

enableAutoUnmount(afterEach);

describe("DefaultLayout.vue", () => {
  it("renders layout", () => {
    const wrapper = mount(DefaultLayout, {});
    expect(wrapper.findComponent({ name: "LayoutHeader" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "LayoutFooter" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "randomv_sfdgiiou" }).exists()).toBe(
      false
    );
  });

  it("renders layout with a slot value if provided", () => {
    const wrapper = mount(DefaultLayout, {
      slots: {
        default: [TableApp],
      },
    });
    expect(wrapper.findComponent({ name: "LayoutHeader" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "LayoutFooter" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "TableApp" }).exists()).toBe(true);
  });

  it("renders layout with a main tag", () => {
    const wrapper = mount(DefaultLayout, {});
    expect(wrapper.find("main").exists()).toBe(true);
  });
});
