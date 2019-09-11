<template>
  <v-app id="app">
    <v-layout row>
      <v-flex xs2>
        <v-btn>TEST</v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'Orsrequest',
  data() {
    return {
      dialog: true,
      loginInfo: {},
      loading: true,
      error: false,
      systemName: process.env.VUE_APP_SYSTEM,
      appName: process.env.VUE_APP_NAME,
      appVersion: process.env.VUE_APP_VERSION,
      location: 'permission',
      elementSize: {
        header: {},
        navigation: {},
        tabs: {},
        content: {},
      },
      route: { /* tabs: [], breadcrumbs: [], */ },
    }
  },
  methods: {
    //
  },
}
</script>

