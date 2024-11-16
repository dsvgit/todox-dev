import { render, signal, effect, computed } from "../framework.js";

export const TodoInput = ({ onAdd }) => {
  const $text = signal("");
  const $isEmpty = computed(() => $text.value.trim() === "");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!$isEmpty.value) {
      onAdd($text.value);
      $text.value = "";
    }
  };

  return render`
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        ${render`
          <input type="text" class="form-control" />
          ${(element) => {
            element.addEventListener("keydown", (e) => {
              e.key === "Enter" && handleAdd(e);
            });

            element.addEventListener("input", (e) => {
              $text.value = e.target.value;
            });

            effect(() => {
              element.value = $text.value;
            });
          }}
        `}
      </div>
      <div class="col-auto">
        ${render`
          <button class="btn btn-primary">Add</button>
          ${(element) => {
            element.addEventListener("click", handleAdd);

            effect(() => {
              element.disabled = $isEmpty.value;
            });
          }}
        `}
      </div>
    </div>
  `;
};
