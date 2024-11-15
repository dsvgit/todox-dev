import { render } from "./framework.js";
import { TodoInput } from "./components/todo-input.js";
import { TodoFilter } from "./components/todo-filter.js";
import { TodoList } from "./components/todo-list.js";
import { state } from "./state.js";

const App = () => {
  const { $filteredTodos, onAdd, onRemove, onFilter } = state();

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
