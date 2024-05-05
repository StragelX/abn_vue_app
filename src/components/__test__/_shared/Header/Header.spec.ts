import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import Header from "../../../_shared/Header/Header.vue";
import HeaderSearch from "../../../_shared/Header/HeaderSearch.vue";

vi.mock("vue-router", () => ({
  resolve: vi.fn(),
}));

vi.mock("vue3-carousel", () => ({
  resolve: vi.fn(),
}));

const wrapper = mount(Header);

test("renders without crashing", () => {
  expect(wrapper.exists()).toBe(true);
});

test("renders HeaderSearch component", () => {
  const headerSearch = wrapper.findComponent(HeaderSearch);
  expect(headerSearch.exists()).toBe(true);
});
