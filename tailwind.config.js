/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary01': '#00A3CB',
        'primary02': '#FF8F85',
        'secondary01': '#FC6736',
        'secondary02': '#2C3E50',
        'secondary03': '#E0F2FF',
        'primaryText': '#1F2A37',
        'secondarytext': '#8899A8',
        'stroke': '#DFE4EA',
        'line-card': '#E5E7EB',
      }
    },
  },
  plugins: [],
}

