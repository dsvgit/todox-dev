import { render, signal } from "../framework.js";

export const TodoInput = ({ onAdd }) => {
  const $text = signal("");

  return render`
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        ${render`<input type="text" class="form-control" />`
          .on("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd($text.value);
              $text.value = "";
            }
          })
          .on("input", (e) => {
            $text.value = e.target.value;
          })
          .withEffect((element) => {
            element.prop("value", $text.value);
          })}
      </div>
      <div class="col-auto">
        ${render`<button class="btn btn-primary">Add</button>`.on(
          "click",
          () => {
            onAdd($text.value);
            $text.value = "";
          },
        )}
      </div>
    </div>
  `;
};
