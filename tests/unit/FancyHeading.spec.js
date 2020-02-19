import Vue from "vue";
import FancyHeading from "@/components/FancyHeading.vue";

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe("FancyHeading.vue", () => {
  const headingData = mountComponentWithProps(FancyHeading, {
    color: "blue",
    title: "Hello, Vue!"
  });
  it("should be the correct color", () => {
    const styleData = headingData.style.getPropertyValue("color");
    expect(styleData).toEqual("blue");
  });

  it("should have the correct title", () => {
    const titleData = headingData.textContent;
    expect(titleData).toEqual("Hello, Vue!");
  });
});
