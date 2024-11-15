import { computed, signal } from "./framework.js";

export const state = () => {
  const $filter = signal("all");

  const $todos = signal([
    signal({ text: "Buy milk", checked: false }),
    signal({ text: "Buy chocolate", checked: true }),
  ]);

  const $filteredTodos = computed(() => {
    const todos = $todos.value;
    const filter = $filter.value;

    return filter === "active"
      ? todos.filter(($todo) => !$todo.value.checked)
      : filter === "completed"
        ? todos.filter(($todo) => $todo.value.checked)
        : todos;
  });

  const onAdd = (text) => {
    $todos.value = [...$todos.value, signal({ text, checked: false })];
  };

  const onRemove = ($todo) => {
    $todos.value = $todos.value.filter((x) => x !== $todo);
  };

  const onFilter = (filter) => {
    $filter.value = filter;
  };

  return {
    $filter,
    $todos: $filteredTodos,
    onAdd,
    onRemove,
    onFilter,
  };
};
