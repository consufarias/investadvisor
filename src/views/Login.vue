<template>
  <v-layout row class="justify-center pt-10">
    <v-container primary pa-1 class="login">
      <v-card class="elements pa-4">
        <img src="@/assets/images/logo-login.png" style="width: 100%;" />
        <v-form>
          <v-text-field
            dark
            prepend-icon="mdi-account"
            name="Username"
            label="Username"
          />
          <v-text-field
            dark
            prepend-icon="mdi-key"
            name="Password"
            label="Password"
            type="password"
          />
          <v-card-actions>
            <v-btn color="black--text primary" large block @click="goToHome()">
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goToHome() {
      this.$router.push('Home')
    },
  },
}
</script>

<style lang="scss">
.login {
  max-width: 300px;
}
</style>
