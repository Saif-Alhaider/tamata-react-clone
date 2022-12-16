/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'crimson':{
          500:"#dc143c",
          600:"#c61236",
          700:"#b01030",
          800:"#9a0e2a",
          900:"#840c24"
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar')
  ],
}