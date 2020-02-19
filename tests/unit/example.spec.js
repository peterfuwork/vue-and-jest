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

  it("expect prop is containing a msg property with undefined as value", () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: ""
      }
    });
    expect(wrapper.props().msg).toBe("");
  });

  it("expect .awesome-vue class is existed in this component", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.find(".awesome-vue").exists()).toBe(true);
  });

  it("expect .awesome-vue class text is awesome-vue", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.find(".awesome-vue").text()).toBe("awesome-vue");
  });
});
