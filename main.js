import { render, signal, computed } from "./framework.js";

const TodoInput = ({ onAdd }) => {
  let text = "";

  return render`
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        ${render`<input type="text" class="form-control" />`
          .on("change", (e) => {
            text = e.target.value;
          })
          .on("keydown", (e) => {
            if (e.key === "Enter") {
              onAdd(e.target.value);
              e.target.value = "";
            }
          })}
      </div>
      <div class="col-auto">
        ${render`<button class="btn btn-primary">Add</button>`.on(
          "click",
          () => {
            onAdd(text);
          },
        )}
      </div>
    </div>
  `;
};

const TodoFilter = ({ onFilter }) => {
  return render`
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      ${render`<input type="radio" class="btn-check" name="btn-filter" id="btn-filter-all" autocomplete="off" checked>`.on(
        "change",
        () => onFilter("all"),
      )}
      <label class="btn btn-outline-secondary" for="btn-filter-all">All</label>

      ${render`<input type="radio" class="btn-check" name="btn-filter" id="btn-filter-active" autocomplete="off">`.on(
        "change",
        () => onFilter("active"),
      )}
      <label class="btn btn-outline-secondary" for="btn-filter-active">Active</label>

      ${render`<input type="radio" class="btn-check" name="btn-filter" id="btn-filter-completed" autocomplete="off">`.on(
        "change",
        () => onFilter("completed"),
      )}
      <label class="btn btn-outline-secondary" for="btn-filter-completed">Completed</label>
    </div>
  `;
};

const TodoItem = ({ $todo, onRemove }) => {
  const id = Math.random().toString(16).slice(2);
  const handleCheck = (e) => {
    e.preventDefault();
    $todo.value = { ...$todo.value, checked: e.target.checked };
  };

  return render`
    <li class="list-group-item list-group-item-action">
      ${render`<input id="${id}" type="checkbox" class="form-check-input" />`
        .on("change", handleCheck)
        .withEffect((element) => {
          const { checked } = $todo.value;

          element.prop("checked", checked);
        })}

      ${render`<label for="${id}" class="form-check-label" />`.withEffect(
        (element) => {
          const { text, checked } = $todo.value;

          element.text(text);
        },
      )}

      ${render`
        <button
          class="btn btn-sm float-end"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
        >
         ❌
       </button>
      `.on("click", () => {
        onRemove($todo);
      })}
    </li>
  `;
};

const TodoList = ({ $todos, onRemove }) =>
  render`<ul class="list-group"></ul>`.withEffect((element) => {
    element.html(
      $todos.value.map(($todo) => {
        return TodoItem({ $todo, onRemove });
      }),
    );
  });

const App = () => {
  const $filter = signal("all");
  const $todos = signal([
    signal({
      text: "Buy milk",
      checked: false,
    }),
    signal({
      text: "Buy chocolate",
      checked: true,
    }),
  ]);
  const $filteredTodos = computed(() => {
    const filter = $filter.value;
    if (filter === "active") {
      return $todos.value.filter(($todo) => !$todo.value.checked);
    }

    if (filter === "completed") {
      return $todos.value.filter(($todo) => $todo.value.checked);
    }

    return $todos.value;
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

  return render`
    <div class="container p-4" style="max-width: 500px;">
      <h1>Todos</h1>
      <div class="vstack gap-3">
        ${TodoFilter({ onFilter })}
        ${TodoInput({ onAdd })}
        ${TodoList({ $todos: $filteredTodos, onRemove })}
      </div>
      
    </div>
  `;
};

render(document.querySelector("#root")).html(App());
