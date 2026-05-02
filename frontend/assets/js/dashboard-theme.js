(function () {
  const storageKey = "alimente-theme";
  const root = document.documentElement;

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getInitialTheme() {
    return localStorage.getItem(storageKey) || (prefersDark() ? "dark" : "light");
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem(storageKey, theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", isDark ? "Alternar para modo claro" : "Alternar para modo escuro");
      button.innerHTML = isDark
        ? '<i data-lucide="sun" class="h-5 w-5"></i>'
        : '<i data-lucide="moon" class="h-5 w-5"></i>';
    });
    document.querySelectorAll("[data-dark-mode-preference]").forEach((input) => {
      input.checked = isDark;
    });
    if (window.lucide) lucide.createIcons();
  }

  function createThemeButton(className) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.themeToggle = "true";
    button.className = className;
    button.addEventListener("click", () => {
      applyTheme(root.classList.contains("dark") ? "light" : "dark");
    });
    return button;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle && sidebarToggle.parentElement) {
      const sidebarThemeButton = createThemeButton("theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition focus:outline-none focus:ring-4 focus:ring-yellow-200/30");
      sidebarToggle.parentElement.insertBefore(sidebarThemeButton, sidebarToggle);
    }

    if (!document.querySelector("[data-theme-toggle-mobile]")) {
      const mobileThemeButton = createThemeButton("theme-toggle-mobile fixed right-4 top-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-yellow-200 md:hidden");
      mobileThemeButton.dataset.themeToggleMobile = "true";
      document.body.appendChild(mobileThemeButton);
    }

    document.querySelectorAll("label").forEach((label) => {
      if (!label.textContent.includes("Modo Escuro")) return;
      const input = label.querySelector('input[type="checkbox"]');
      if (!input) return;
      input.dataset.darkModePreference = "true";
      input.addEventListener("change", () => {
        applyTheme(input.checked ? "dark" : "light");
      });
    });

    applyTheme(root.classList.contains("dark") ? "dark" : getInitialTheme());
  });
})();
