/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid:'repeat(auto-fit,minmax(15rem,1fr))',
      }
    },
  },
  plugins: [{
        tailwindcss: {},
        autoprefixer: {},
  },
 
    
  ],
}

