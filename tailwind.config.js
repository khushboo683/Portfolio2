module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
      colors:{
        'blue': '#10122e',
        'd-blue':'#000000',
        'h-blue':'#070814',
        'white':'#ffffff',
        'f-blue':'#7DF9FF',
        'b-blue':'#8d70ff',
        'n-blue':'#1F51FF',
        'btn-hover':'#0d0f26',
        'silver':'#bfc1c2',
        'silver-shadow':'#acacac',
        'light-silver':'#dcdcdc'
      },
      fontFamily:{
        pat:['Patrick Hand','cursive'],
        acme:['Acme', 'sans-serif'],
        rob:['Roboto', 'sans-serif']
      }
    },
    screens: {
      '2xl': {'max': '22000px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
