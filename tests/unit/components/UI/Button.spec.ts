import { enableAutoUnmount, mount, shallowMount } from "@vue/test-utils";
import Button from "@/components/UI/Buttons/Button.vue";

enableAutoUnmount(afterEach);

describe("Button.vue", () => {
  it("renders text into a slot", () => {
    const msg = "Загрузить данные";
    const wrapper = mount(Button, {
      slots: { default: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("renders default text into a slot if slot value not provided", () => {
    const defaultSlotValue = "Gray Button";
    const wrapper = mount(Button, {});
    expect(wrapper.text()).toMatch(defaultSlotValue);
  });

  it("doesn't allow click if disable prop is provided", async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });
    wrapper.vm.loadingResource = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.attributes("disabled")).toBeDefined();
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
  });
  it("allows click if disable prop is not provided", async () => {
    const wrapper = shallowMount(Button, {});
    wrapper.vm.loadingResource = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.element.attributes.getNamedItem("disabled")).toBeDefined();
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(false);
  });
});
