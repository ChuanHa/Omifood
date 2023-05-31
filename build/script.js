// Sticky navigation
const sectionHero = document.querySelector("#section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector("header").classList.add("fixed"),
        document.querySelector("header").classList.remove("relative"),
        document.querySelector("header").classList.add("opacity-90"),
        document.querySelector("header").classList.add("bg-white"),
        document.querySelector("header").classList.remove("bg-linen"),
        document.querySelector("header").classList.remove("backdrop-blur-sm");
    } else {
      document.querySelector("header").classList.remove("fixed"),
        document.querySelector("header").classList.add("relative"),
        document.querySelector("header").classList.remove("opacity-90"),
        document.querySelector("header").classList.remove("bg-white"),
        document.querySelector("header").classList.add("bg-linen"),
        document.querySelector("header").classList.add("backdrop-blur-sm");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

const sectionNav = document.querySelector("#section-hero");
const observe = new IntersectionObserver(
  function (entries) {
    const entr = entries[0];
    if (entr.isIntersecting === true) {
      document.querySelector("ul").classList.add("lg:bg-linen"),
        document.querySelector("ul").classList.add("duration-700"),
        document.querySelector("ul").classList.remove("duration-0");
    } else if (entr.isIntersecting === false) {
      document.querySelector("ul").classList.remove("lg:bg-linen"),
        document.querySelector("ul").classList.remove("duration-700"),
        document.querySelector("ul").classList.add("duration-0");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observe.observe(sectionNav);
