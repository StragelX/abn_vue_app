import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import HomeHeroInfoBlock from "../../Home/HomeHeroInfoBlock.vue";
import HomeHero from "../../Home/HomeHero.vue";

const wrapper = mount(HomeHero);

test("renders without crashing", () => {
  expect(wrapper.exists()).toBe(true);
});

test("renders HomeHeroInfoBlock", () => {
  expect(wrapper.findComponent(HomeHeroInfoBlock).exists()).toBe(true);
});
