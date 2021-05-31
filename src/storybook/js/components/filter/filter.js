export default (function () {
  function hideElems(target) {
    let els = document.querySelectorAll(target);
    els.forEach((el) => {
      el.classList.remove("active");
    });
  }

  function filtrate(tag) {
    let items = undefined;
    if (tag == "all") {
      items = document.querySelectorAll(`.article`);
    } else {
      items = document.querySelectorAll(`.article[data-category='${tag}']`);
    }

    items.forEach((item) => {
      item.classList.add("active");
    });
  }

  function toggleItemStatus(target, items) {
    let targets = document.querySelectorAll(items);
    targets.forEach((target) => {
      target.classList.remove("active");
    });

    target.classList.add("active");
  }

  window.addEventListener("load", function () {
    const root = document.querySelector("body");
    const filter = "filter__item";

    root.addEventListener("click", function (e) {
      if (e.target.classList == filter) {
        const el = e.target;
        let category = el.getAttribute("data-category");
        toggleItemStatus(el, ".filter__item");
        hideElems(".article");
        filtrate(category);
      }
    });
  });
})();
