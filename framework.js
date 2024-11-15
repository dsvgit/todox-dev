import { effect, signal, computed } from "@preact/signals-core";
import $ from "jquery";

export const render = (strings, ...elements) => {
  if (!Array.isArray(strings) && typeof strings === "object") {
    return $(strings);
  }

  const elementToId = new Map();

  const walkElement = (x) => {
    if (x instanceof $) {
      const id = Math.random().toString(16).slice(2);
      elementToId.set(x, id);
      return `<div id="${id}"></div>`;
    }

    return String(x);
  };

  const raw = String.raw({ raw: strings }, ...elements.map(walkElement));

  const root = $(raw);

  for (const element of elementToId.keys()) {
    root.find(`#${elementToId.get(element)}`).replaceWith(element);
  }

  return root;
};

$.fn.withEffect = function (fn) {
  effect(() => fn(this));
  return this;
};

export { signal, effect, computed };
