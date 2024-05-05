import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import ShowPreview from "../../_shared/ShowPreview.vue";

test("renders without crashing", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {},
    },
  });
  expect(wrapper.exists()).toBe(true);
});

test("does not render season number badge when no props.movie.number passed", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {
        season: 1,
      },
    },
  });

  const badgeSecondary = wrapper.find(".badge-secondary");
  expect(badgeSecondary.exists()).toBe(false);
});

test("does not render season number badge when props.movie.number is null", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {
        number: null,
      },
    },
  });

  const badgeSecondary = wrapper.find(".badge-secondary");
  expect(badgeSecondary.exists()).toBe(false);
});

test("does not render badges when respective properties are null or empty", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {
        _embedded: {
          show: {
            rating: {
              average: null,
            },
            status: null,
            language: null,
            genres: [],
          },
        },
      },
    },
  });

  const ratingBadge = wrapper.find(".badge-primary");
  expect(ratingBadge.exists()).toBe(false);

  const statusBadge = wrapper.find(".badge-accent");
  expect(statusBadge.exists()).toBe(false);

  const languageBadge = wrapper.find(".badge-ghost");
  expect(languageBadge.exists()).toBe(false);

  const genreBadges = wrapper.findAll(".badge-outline");
  expect(genreBadges.length).toBe(0);
});

test("renders show image and title correctly", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {
        _embedded: {
          show: {
            image: {
              medium: "test-image-url",
            },
            name: "test-show-name",
          },
        },
      },
    },
  });

  const img = wrapper.get("img");
  expect(img.attributes("src")).toBe("test-image-url");
  expect(img.attributes("alt")).toBe("test-show-name");
});

test("renders show name when it is not null", () => {
  const wrapper = mount(ShowPreview, {
    props: {
      movie: {
        _embedded: {
          show: {
            name: "test-show-name",
          },
        },
      },
    },
  });

  const routerLink = wrapper.get("router-link");
  expect(routerLink.text()).toContain("test-show-name");
});
