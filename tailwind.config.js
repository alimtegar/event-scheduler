module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  options: {
    safelist: [{ variants: [ 'w' ] }]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
