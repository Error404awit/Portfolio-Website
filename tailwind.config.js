/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        salamin:
          "rgba(255, 255, 255, 0.2)" /**Adjust mo yung 0.2 para sa transparency nung glassmorph, max 1 */,
        glassbrdr:
          "rgba(255, 255, 255, 0.3)" /**Adjust mo yung 0.3 para sa border nung glassmorph, max 1 */,
      },
      boxShadow: {
        glassshadow:
          "0 4px 30px rgba(0, 0, 0, 0.1)" /**Adjust mo yung 0.1 para sa shadow nung glassmorph, max 1 */,
      },
    },
  },
  plugins: [],
};
