const themes = {
  cyan: {
    accent: "hsl(178, 71%, 61%)",
    light: "hsl(178 84% 32% / 0.5)",
    bkg: "hsl(178 100% 50% / 0.3)"
  },

  pink: {
    accent: "hsl(309, 41%, 74%)",
    light: "hsl(297 100% 33% / 0.5)",
    bkg: "hsl(293 78% 32% / 0.3)"
  },

  blue: {
    accent: "hsl(195, 100%, 50%)",
    light: "hsl(205 100% 40% / 0.5)",
    bkg: "hsl(210 100% 25% / 0.3)"
  },

  purple: {
    accent: "hsl(271, 82%, 79%)",
    light: "hsl(265 57% 49% / 0.5)",
    bkg: "rgb(179 129 241/ 0.3)"
  },

  green: {
    accent: " hsl(151, 57%, 62%)",
    light: "hsl(165 100% 30% / 0.5)",
    bkg: "hsl(171 86% 20% / 0.3)"
  },

  orange: {
    accent: "hsl(29, 95%, 76%)",
    light: "hsl(26 81% 46% / 0.5)",
    bkg: "hsl(23 76% 29% / 0.3)"
  }
};


const changeTheme = (themeName) => {
  const theme = themes[themeName];
  document.documentElement.style.setProperty("--accent", theme.accent);

  document.documentElement.style.setProperty("--accent-light", theme.light);

  document.documentElement.style.setProperty("--accent-bkg", theme.bkg);

}

document.querySelectorAll("[data-js-input]")
  .forEach(input => {
    input.addEventListener("change", () => {
      changeTheme(input.value);
    });

  });
