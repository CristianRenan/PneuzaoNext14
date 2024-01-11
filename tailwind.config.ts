import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'green-pz':"#00943d",
      'green-pz-2':"#004a1f",
      'yellow-pz':"#fab000"
     },
     width: {
      'input-search': '700px',
      'row':'1280px',
      'feature-box':'300px'
    },
    height: {
      'brand-box':'120px',
      'map-box':'420px',
      'product-card':'440px'
    },
    minWidth: {
      'brand-box':'120px',
      'product-card':'255px'
    }
    },
  },
  plugins: [],
}
export default config
