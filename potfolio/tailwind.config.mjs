/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ['./**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
        colors: {
            darkHover: '#2A004A',
            darkTheme: '#11001F',
        },
        fontFamily: {
            Outfit: ["var(--font-outfit)", "sans-serif"],
            Ovo: ["var(--font-ovo)", "serif"]
        },
        boxShadow: {
          'black' : '4px 4px 0 #000',
          'white' : '4px 4px 0 #fff',
        }
    },
  },
  darkMode: 'class',
  plugins: [],
}