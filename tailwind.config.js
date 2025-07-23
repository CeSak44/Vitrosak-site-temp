/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        // add other tokens if needed
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
