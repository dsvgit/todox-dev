import { computed, signal, effect } from "./framework.js";

const defaultTodos = [
  { text: "🎒 Get your lunch box", checked: true },
  { text: "👝 Get 3 ziploc bags", checked: true },
  {
    text: "🍪 Put 2 cookies in a ziploc bag, then put it in your lunch box",
    checked: false,
  },
  {
    text: "🥨 Put pretzels in a ziploc bag, then put it in your lunch box",
    checked: false,
  },
  { text: "⬜ Put a napkin in your lunch box", checked: false },
  {
    text: `🧈 Make a peanut butter sandwich, put it in your lunch box`,
    checked: false,
  },
  {
    text: `🍼 Pour milk into your drink box, put it in your lunch box`,
    checked: false,
  },
];

const persistentSignal = (name, initialValue, { onInit, onSet }) => {
  const localState = JSON.parse(localStorage.getItem(name));
  const state = localState || initialValue;
  const $signal = signal(onInit(state));

  effect(() => {
    const result = onSet($signal.value);
    localStorage.setItem(name, JSON.stringify(result));
  });

  return $signal;
};

export const state = () => {
  const $filter = signal("all");

  const $todos = persistentSignal("todos", defaultTodos, {
    onInit: (x) => x.map((x) => signal(x)),
    onSet: (x) => x.map(($x) => $x.value),
  });

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
