import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#DCBE82',
        background: '#595959',
        elements: '#282828',
        // highlights: '#1D75C3',
        // icons: '#A8A7A4',
        // success: '#31A34F',
        // warning: '#EEC854',
        // error: '#C6291C',
      },
      dark: {
        primary: '#DCBE82',
        background: '#6D6D6D',
        elements: '#282828',
      },
    },
  },
})
