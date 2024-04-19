/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onNeutralBg: "var(--on-neutral-bg)",
        neutralBg: "var(--neutral-bg)",
        onPrimaryBg: "var(--on-primary-bg)",
        primaryBg: "var(--primary-bg)",
        primary: "var(--primary)",
      },
    },
    plugins: [],
  },
};
