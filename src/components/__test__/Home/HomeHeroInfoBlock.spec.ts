import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import HomeHeroInfoBlock from "../../Home/HomeHeroInfoBlock.vue";

const wrapper = mount(HomeHeroInfoBlock);

test("renders without crashing", () => {
  expect(wrapper.exists()).toBe(true);
});

test("renders movie title", () => {
  expect(wrapper.get("h1").text()).toBe("Dune: Part Two");
});

test("renders movie description", () => {
  const description =
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.";
  expect(wrapper.text()).toContain(description);
});
