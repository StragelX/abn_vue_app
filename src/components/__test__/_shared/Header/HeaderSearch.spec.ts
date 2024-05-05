import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import HeaderSearch from "../../../_shared/Header/HeaderSearch.vue";

const wrapper = mount(HeaderSearch);

vi.mock("search", () => ({
  resolve: vi.fn(),
}));

test("renders without crashing", () => {
  expect(wrapper.exists()).toBe(true);
});

test("toggleInput function works correctly", async () => {
  await wrapper.vm.toggleInput();
});
