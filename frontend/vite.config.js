import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({

theme:{
extend:{
  colors:{
    'primary':'#FFCE1A',
    'secondary':'#0D0842',
    'blackBG':'#F3F3F3',
    'Favorite':'#FF5841'
  },
  fontFamily:{
    'primary':  ["Montserrat", "sans-serif"],
    'secondary': [ "Nunito Sans","sans-serif"]
  }
}

},




  plugins: [tailwindcss(),react()],
})
