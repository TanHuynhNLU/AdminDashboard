const app = () => {
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );
  const themeToggleDarkBtn = document.getElementById(
    "theme-toggle-dark-button"
  );
  const themeToggleLightBtn = document.getElementById(
    "theme-toggle-light-button"
  );

  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleDarkIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
  } else {
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.remove("dark");
  }

  themeToggleLightBtn.onclick = () => {
    themeToggleLightIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.add("hidden");

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  themeToggleDarkBtn.onclick = () => {
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
};

document.addEventListener("DOMContentLoaded", app);
