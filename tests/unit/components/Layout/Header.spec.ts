import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Layout/Header.vue";

describe("Header.vue", () => {
  it("renders header", () => {
    const leftText = "Тестовое для НБКИ";
    const rightText = "Орлов Илья";
    const wrapper = shallowMount(Header, {});
    expect(wrapper.text()).toMatch(leftText);
    expect(wrapper.text()).toMatch(rightText);
  });
});
