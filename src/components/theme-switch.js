import { render, effect, persistentSignal } from "../framework.js";

const themes = {
  system: { icon: "bi-brightness-alt-high", color: "#ffffff" },
  light: { icon: "bi-brightness-high", color: "#ffffff" },
  dark: { icon: "bi-moon", color: "#212529" },
};
const order = Object.keys(themes);

const $theme = persistentSignal("theme", "system", {
  onInit: (x) => (x in themes ? x : "system"),
});

const query = window.matchMedia("(prefers-color-scheme: dark)");

export const ThemeSwitch = () => {
  const getTheme = (theme) => {
    return theme !== "system" ? theme : query.matches ? "dark" : "light";
  };

  const applyThemeToDocument = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", getTheme(theme));
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", themes[getTheme(theme)].color);
    setTimeout(() => {
      document.body.classList.add("background-transition");
    });
  };

  effect(() => {
    applyThemeToDocument($theme.value);
  });

  query.addEventListener("change", (e) => applyThemeToDocument($theme.value));

  return render`
    <button class="btn btn-outline-secondary btn-sm" style="min-width: 34px">
      ${render`
        <i></i>
        ${(element) => {
          effect(() => {
            element.className = themes[$theme.value].icon;
          });
        }}
      `}
    </button>
    ${(element) => {
      element.addEventListener("click", (e) => {
        const index = order.indexOf($theme.value);
        $theme.value = order[(index + 1) % order.length];
      });
    }}
  `;
};
