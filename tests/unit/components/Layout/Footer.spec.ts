import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Layout/Footer.vue";

describe("Footer.vue", () => {
  it("renders footer", () => {
    const leftText = "iljorlov";
    const wrapper = shallowMount(Footer, {});
    expect(wrapper.text()).toMatch(leftText);
  });
});
