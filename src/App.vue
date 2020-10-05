<template>
  <v-app>
    <v-main>
      <Layout />
    </v-main>
  </v-app>
</template>

<script>
import Layout from './views/Layout'

export default {
  name: 'App',

  components: {
    Layout,
  },
}
</script>

<style lang="scss">
#app {
  background-color: #3c3c3c;
  background-image: linear-gradient(to bottom left, #595959, #2c2c2c);
  color: #dcbe82;
}
</style>
