function toggleTheme() {
    const theme = document.getElementById("theme");
    if (theme.classList.contains("scheme-dark")) {
      theme.classList.remove("scheme-dark");
    } else {
      theme.classList.add("scheme-dark");
    }
  }