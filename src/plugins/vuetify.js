import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.accent4,
    primaryDark: '#006fbf',
    primaryLight: colors.blue.lighten1,
    success: colors.green.accent4,
    error: colors.red.darken1,
    warning: colors.yellow.darken4,
    label: '#757575',
  },
})

