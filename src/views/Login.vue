<template>
  <v-layout row class="justify-center pt-10">
    <v-container primary pa-1 class="login">
      <v-card class="elements pa-4">
        <img src="@/assets/images/logo-login.png" style="width: 100%;" />
        <v-form>
          <v-text-field
            v-model="email"
            dark
            prepend-icon="mdi-account"
            name="Username"
            label="Email"
          />
          <v-text-field
            v-model="password"
            dark
            prepend-icon="mdi-key"
            name="Password"
            label="Password"
            type="password"
          />
          <v-card-actions>
            <v-btn color="black--text primary" large block @click="getUserInfo">
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
      <v-btn color="white--text background" large block @click="createUser">
        Crear Usuario
      </v-btn>
    </v-container>
  </v-layout>
</template>

<script>
import firebase from '../firebaseConfig'
const db = firebase.firestore()

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      userInfo: null,
    }
  },
  methods: {
    checkUserInfo() {
      if (!this.userInfo) {
        alert('usuario no existe')
      } else {
        if (this.password === this.userInfo.password) this.goToHome()
        else alert('contraseña incorrecta')
      }
    },
    goToHome() {
      this.$store.commit('changeUserInfo', this.userInfo)
      this.$router.push('Home')
    },
    getUserInfo() {
      let users = []
      db.collection('users')
        .where('email', '==', this.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            users.push({
              id: doc.id,
              name: doc.data().name,
              email: doc.data().email,
              password: doc.data().password,
              birthdate: doc.data().birthdate,
              estate: doc.data().estate,
              profile: doc.data().profile,
              img: doc.data().img,
            })
          })
          this.userInfo = users[0]
          this.checkUserInfo()
        })
        .catch(error => {
          console.log('Error getting user: ', error)
        })
    },
    createUser() {
      this.$router.push('CreateUser')
    },
  },
}
</script>

<style lang="scss">
.login {
  max-width: 300px;
}
</style>
