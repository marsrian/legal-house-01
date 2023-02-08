/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/images/banner.png')",
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
