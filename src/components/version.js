import { effect, render, signal } from "../framework.js";

export const Version = () => {
  const $version = signal("");

  fetch("version")
    .then((res) => res.text())
    .then((text) => {
      $version.value = text;
    });

  return render`
    <span class="blockquote-footer text-success" style="font-size: 12px;"></span>
    ${(element) => {
      effect(() => {
        element.innerText = "Released: " + $version.value;
      });
    }}
  `;
};
