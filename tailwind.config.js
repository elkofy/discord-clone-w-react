/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:
          {
            'main-frame': '1fr 4fr'
          }
    },
  },
  plugins: [
      require('daisyui')
  ],
}

