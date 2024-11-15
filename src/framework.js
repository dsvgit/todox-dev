import { effect, signal, computed } from "@preact/signals-core";

export const render = (strings, ...elements) => {
  const elementToId = new Map();
  const handlers = [];

  const walkElement = (x) => {
    if (x instanceof window.HTMLCollection) {
      let str = "";
      for (const item of x) {
        str += walkElement(item);
      }
      return str;
    }

    if (typeof x === "function") {
      handlers.push(x);
      return "";
    }

    if (x instanceof window.Node) {
      const id = "id" + Math.random().toString(16).slice(2);
      elementToId.set(x, id);
      return `<div id="${id}"></div>`;
    }

    return String(x);
  };

  const raw = String.raw({ raw: strings }, ...elements.map(walkElement));

  const template = document.createElement("template");
  template.innerHTML = raw;

  for (const element of elementToId.keys()) {
    template.content
      .querySelector(`#${elementToId.get(element)}`)
      .replaceWith(element);
  }

  for (const handler of handlers) {
    handler(template.content.children[0]);
  }

  return template.content.children;
};

export const For = ({ $list, component, children }) => {
  component = component[0];
  const itemToElement = new WeakMap();

  effect(() => {
    const list = $list.value;

    const elements = list.map((item) => {
      const cached = itemToElement.get(item);

      if (cached) {
        return cached;
      } else {
        const newElement = children(item)[0];
        itemToElement.set(item, newElement);
        return newElement;
      }
    });

    component.replaceChildren(...elements);
  });

  return component;
};

export { signal, effect, computed };
