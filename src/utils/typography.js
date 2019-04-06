import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  headerLineHeight: 1.075,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: '300',
  googleFonts: [
    {
      name: 'Lato',
      styles: ['300', '400', '700', '900'],
    },
  ],
})

export default typography
