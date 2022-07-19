/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#d97706',
        ijo:'#166534',
        secondary:'#64748b',
      },
      screen:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
