import { render } from "../framework.js";

export const TodoFilter = ({ onFilter }) => {
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
