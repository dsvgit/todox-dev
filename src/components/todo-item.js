import { effect, render } from "../framework.js";

export const TodoItem = ({ $todo, onRemove }) => {
  const id = Math.random().toString(16).slice(2);
  const handleCheck = (e) => {
    e.preventDefault();
    $todo.value = { ...$todo.value, checked: e.target.checked };
  };

  return render`
    <li class="list-group-item list-group-item-action">
      ${render`
        <input id="${id}" type="checkbox" class="form-check-input" />
        ${(element) => {
          element.addEventListener("change", handleCheck);

          effect(() => {
            const { checked } = $todo.value;
            element.checked = checked;
          });
        }}
      `}
      
      ${render`
        <label for="${id}" class="form-check-label" />
        ${(element) => {
          effect(() => {
            const { text, checked } = $todo.value;
            element.textContent = text;
            element.style.textDecoration = checked ? "line-through" : "none";
          });
        }}
      `}
      
      ${render`
        <button
          class="btn btn-sm float-end"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
        >
         ❌
        </button>
         ${(element) => {
           element.addEventListener("click", () => {
             onRemove($todo);
           });
         }}
      `}
    </li>
  `;
};
