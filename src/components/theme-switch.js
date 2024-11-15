import { render, signal, effect } from "../framework.js";

export const ThemeSwitch = () => {
  const themes = {
    system: { icon: "bi-brightness-alt-high" },
    light: { icon: "bi-brightness-high" },
    dark: { icon: "bi-moon" },
  };
  const order = Object.keys(themes);

  const storageKey = "theme";
  const saved = localStorage.getItem(storageKey);
  const $theme = signal(saved in themes ? saved : "system");

  const getTheme = (theme) => {
    return theme !== "system"
      ? theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const applyThemeToDocument = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", getTheme(theme));
  };

  effect(() => {
    localStorage.setItem(storageKey, $theme.value);
    applyThemeToDocument($theme.value);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => applyThemeToDocument($theme.value));

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
