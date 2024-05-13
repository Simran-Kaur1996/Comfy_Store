import typography from '@tailwindcss/typography'
import daisyUI from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyUI],
  daisyui: {
    themes: ['winter', 'dracula'] // Specify the themes you want to include
  }
}
