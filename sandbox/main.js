import { signal, effect } from "@preact/signals-core";

const TodoItem = ({ todoSignal }) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <div>
      <input data-selector="checkbox" type="checkbox" />
      <label data-selector="label" />
    </div>
  `;

  const checkbox = template.content.querySelector('[data-selector="checkbox"]');
  checkbox.addEventListener("change", (e) => {
    e.preventDefault();
    todoSignal.value = {
      ...todoSignal.value,
      checked: e.target.checked,
    };
  });
  effect(() => {
    checkbox.checked = todoSignal.value.checked;
  });

  const label = template.content.querySelector('[data-selector="label"]');
  effect(() => {
    label.textContent = todoSignal.value.text;
    label.style.textDecoration = todoSignal.value.checked
      ? "line-through"
      : "none";
  });

  return template.content;
};

const TodoList = ({ todosSignal }) => {
  const template = document.createElement("template");

  template.innerHTML = `
    <ul data-selector="todo-list"></ul>
  `;

  template.content.querySelector('[data-selector="todo-list"]').replaceChildren(
    ...todosSignal.value.map((todoSignal) => {
      return TodoItem({ todoSignal });
    }),
  );

  return template.content;
};

const App = () => {
  const todosSignal = signal([
    signal({
      text: "Купить молоко",
      checked: false,
    }),
    signal({
      text: "Купить пельмени",
      checked: true,
    }),
  ]);

  const template = document.createElement("template");

  template.innerHTML = `
    <div class="container">
      <h1>Todos</h1>
      <ul data-selector="todo-list"></ul>
    </div>
  `;

  template.content.querySelector('[data-selector="todo-list"]').replaceWith(
    TodoList({
      todosSignal,
    }),
  );

  return template.content;
};

const root = document.querySelector("#root");

root.innerHTML = ``;
root.appendChild(App());
