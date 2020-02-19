import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("expect a msg in prop", () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: "g"
      }
    });
    expect(wrapper.props("msg")).toBe("g");
  });

  it("expect propsData is containing a msg property key", () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: ""
      }
    });
    expect(wrapper.vm.$options.propsData).toHaveProperty("msg");
  });
});
