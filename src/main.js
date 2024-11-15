import { render } from "./framework.js";
import { TodoInput } from "./components/todo-input.js";
import { TodoFilter } from "./components/todo-filter.js";
import { TodoList } from "./components/todo-list.js";
import { state } from "./state.js";
import { Version } from "./components/version.js";
import { ThemeSwitch } from "./components/theme-switch.js";

const App = () => {
  const { $todos, onAdd, onRemove, onFilter } = state();

  return render`
    <div class="container p-4" style="max-width: 500px;">
      <div class="vstack gap-3">
        <header class="vstack">
          <div class="hstack justify-content-between">
            <h1 class="mb-0">Todos</h1>
            ${ThemeSwitch()}
          </div>
          <div>
            ${Version()}
          </div>
        </header>
        ${TodoFilter({ onFilter })}
        ${TodoInput({ onAdd })}
        ${TodoList({ $todos, onRemove })}
      </div>
    </div>`;
};

document.querySelector("#root").replaceChildren(...App());
