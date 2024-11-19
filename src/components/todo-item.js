import { effect, render } from "../framework.js";

export const TodoItem = ({ $todo, onRemove }) => {
  const id = "id" + Math.random().toString(16).slice(2);
  const handleCheck = (e) => {
    e.preventDefault();
    $todo.value = { ...$todo.value, checked: e.target.checked };
  };
  const handleEdit = (e) => {
    e.preventDefault();
    $todo.value = { ...$todo.value, text: e.target.innerText };
  };
  return render`
    <li class="list-group-item todox-list-group-item-action hstack gap-3 pe-1 align-items-start">
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
        <div class="d-inline flex-fill todox-item-editable" contenteditable="true"/>
        ${(element) => {
          let isFocused = false;
          element.addEventListener("input", handleEdit);
          element.addEventListener("focus", () => {
            isFocused = true;
          });
          element.addEventListener("blur", () => {
            isFocused = false;
          });

          effect(() => {
            const { text, checked } = $todo.value;
            if (!isFocused) {
              element.innerText = text;
            }

            element.style.opacity = checked ? 0.5 : 1;
          });
        }}
      `}
      
      ${render`
        <button
          class="btn btn-sm"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .6rem;"
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
