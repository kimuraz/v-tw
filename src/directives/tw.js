const tw = (options) => ({
  bind(el) {
    const elTag = el.tagName.toLowerCase();

    el.classList.add(options[elTag]);
  }
});

export default tw;
