import { computed, signal } from "./framework.js";

export const state = () => {
  const $filter = signal("all");

  const $todos = signal([
    signal({ text: "🎒 Get your lunch box", checked: true }),
    signal({ text: "👝 Get 3 ziploc bags", checked: true }),
    signal({
      text: "🍪 Put 2 cookies in a ziploc bag, then put it in your lunch box",
      checked: false,
    }),
    signal({
      text: "🥨 Put pretzels in a ziploc bag, then put it in your lunch box",
      checked: false,
    }),
    signal({ text: "⬜ Put a napkin in your lunch box", checked: false }),
    signal({
      text: `🧈 Make a peanut butter sandwich, put it in your lunch box`,
      checked: false,
    }),
    signal({
      text: `🍼 Pour milk into your drink box, put it in your lunch box`,
      checked: false,
    }),
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
