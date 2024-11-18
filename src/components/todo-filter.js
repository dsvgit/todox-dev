import { effect, render } from "../framework.js";

export const TodoFilter = ({ $filter, onFilter }) => {
  return render`
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      ${FilterItem({
        title: "All",
        value: "all",
        $filter,
        onFilter,
      })}
      
      ${FilterItem({
        title: "Active",
        value: "active",
        $filter,
        onFilter,
      })}
      
      ${FilterItem({
        title: "Completed",
        value: "completed",
        $filter,
        onFilter,
      })}
    </div>
  `;
};

const FilterItem = ({ value, title, $filter, onFilter }) => {
  const id = "id" + Math.random().toString(16).slice(2);

  return render`
    ${render`
      <input type="radio" class="btn-check" name="btn-filter" id=${id} autocomplete="off">
      ${(element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          onFilter(value);
        });

        effect(() => {
          const checked = $filter.value === value;
          if (checked) {
            setTimeout(() => {
              element.checked = true;
            });
          }
        });
      }}
    `}
    <label class="btn btn-outline-secondary" for=${id}>${title}</label>
  `;
};
