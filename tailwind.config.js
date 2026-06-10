/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind escaneia o HTML para gerar apenas as classes realmente usadas,
  // mantendo o CSS final enxuto (tree-shaking).
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        // IBM Plex Sans quando online; fallback para fontes do sistema (100% offline).
        sans: [
          '"IBM Plex Sans"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // Identidade visual "Finance" — verde esmeralda como cor de marca.
        brand: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        canvas: "#F4F6F8",
        surface: "#FFFFFF",
        ink: "#0F172A",
        muted: "#64748B",
        subtle: "#94A3B8",
        line: "#E9EDF2",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)",
        soft: "0 1px 3px rgba(15,23,42,0.06)",
      },
    },
  },
  plugins: [],
};
