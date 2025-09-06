import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "440px",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "forest",
      "synthwave",
      "halloween",
      "dracula",
      "autumn",
      "night",
      "coffee",
      "winter",
      "luxury",
    ],
  },
};
