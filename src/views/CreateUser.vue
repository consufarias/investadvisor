<template>
  <v-container>
    <div v-for="(question, index) in questions" :key="index">
      <div v-show="index === questionIndex">
        <h2>{{ question.text }}</h2>
        <ol class="ma-8">
          <li v-for="(response, index2) in question.responses" :key="index2">
            <label>
              <input
                type="radio"
                v-bind:value="response.value"
                v-bind:name="index"
                v-model="userResponses[index]"
              />
              {{ response.text }}
            </label>
          </li>
        </ol>
        <div class="d-flex justify-space-between">
          <v-btn :disabled="questionIndex <= 0" @click="questionIndex--">
            Anterior
          </v-btn>
          <v-btn
            :class="{ primary: questionIndex === questions.length - 1 }"
            @click="questionIndex++"
          >
            {{
              questionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente'
            }}
          </v-btn>
        </div>
      </div>
    </div>
    <div v-show="questionIndex === questions.length">
      <h2>
        {{ score() }}
      </h2>
      <div>
        <v-text-field dark v-model="name" label="Nombre" clearable />
        <v-text-field dark v-model="email" label="Correo" clearable />
        <v-text-field
          dark
          v-model="password"
          label="Contraseña"
          clearable
          type="password"
        />
        <v-text-field dark v-model="birthdate" label="Nacimiento" clearable />
        <v-text-field dark v-model="estate" label="Patrimonio" clearable />
        <div class="d-flex justify-end mt-4">
          <v-btn :disabled="!canCreateUser" class="primary" @click="createUser">
            Crear Usuario
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import firebase from '../firebaseConfig'
const db = firebase.firestore()

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      birthdate: '',
      estate: '',
      profile: '',
      questionIndex: 0,
      userResponses: Array(7).fill(0),
      questions: [
        {
          text:
            'Pregunta 1: A 60 d\u00edas despu\u00e9s de depositar dinero en una inversi\u00f3n, su precio cae un 20%. Suponiendo que la informaci\u00f3n relevante no ha cambiado, \u00bfqu\u00e9 har\u00eda usted?',
          responses: [
            {
              text:
                'Vender y evitar una mayor p\u00e9rdida, probar con otro activo.',
              value: 1,
            },
            {
              text:
                'No hacer nada y esperar a que la inversi\u00f3n se recupere.',
              value: 2,
            },
            {
              text:
                'Compra m\u00e1s. Fue una buena inversi\u00f3n antes y ahora es buena hora de comprar m\u00e1s.',
              value: 3,
            },
          ],
        },
        {
          text:
            'Pregunta 2: Su inversi\u00f3n se redujo un 20%, pero es parte de una cartera que se utiliza para cumplir con metas de inversi\u00f3n de tres diferentes horizontes temporales. \u00bfQu\u00e9 har\u00eda usted si el objetivo era de cinco a\u00f1os?',
          responses: [
            { text: 'Vender.', value: 1 },
            { text: 'No hacer nada.', value: 2 },
            { text: 'Comprar m\u00e1s.', value: 3 },
          ],
        },
        {
          text:
            'Pregunta 3: El precio de su inversi\u00f3n de retiro sube un 25% un mes despu\u00e9s de haberla comprado. Si la informaci\u00f3n relevante no ha cambiado y tiene la posibilidad de hacer algo \u00bfqu\u00e9 har\u00eda?',
          responses: [
            { text: 'Venderlos y materializar sus ganancias.', value: 1 },
            { text: 'No hacer nada, esperar que aumente m\u00e1s.', value: 2 },
            {
              text: 'Comprar m\u00e1s, podr\u00eda ir m\u00e1s alto.',
              value: 3,
            },
          ],
        },
        {
          text:
            'Pregunta 4: Usted est\u00e1 invirtiendo para su jubilaci\u00f3n, que es a 15 a\u00f1os. \u00bfQu\u00e9 prefiere hacer?',
          responses: [
            {
              text:
                'Invertir en un fondo del mercado monetario o fondos garantizados de inversi\u00f3n, renunciando a la posibilidad de mayores ganancias, pero pr\u00e1cticamente asegurando el capital.',
              value: 1,
            },
            {
              text:
                'Invertir en una mezcla de 50-50 de los fondos de bonos y acciones, esperando conseguir alg\u00fan crecimiento del capital, pero protegiendo de alguna forma un ingreso fijo.',
              value: 2,
            },
            {
              text:
                'Invertir en fondos mutuos agresivos cuyo valor es probable que fluct\u00faen de forma significativa durante el a\u00f1o, pero tienen el potencial para los aumentos impresionantes de cinco a diez a\u00f1os.',
              value: 3,
            },
          ],
        },
        {
          text:
            'Pregunta 5: Acaba de ganar un gran premio en un concurso. \u00bfCu\u00e1l escoger\u00eda?',
          responses: [
            { text: '$2000 en efectivo,', value: 1 },
            { text: 'Uno que gane $5000 (probabilidad del 50%).', value: 2 },
            { text: 'Uno que gane $15000 (probabilidad del 20%).', value: 3 },
          ],
        },
        {
          text:
            'Pregunta 6: Una buena oportunidad de inversi\u00f3n acaba de llegar. Pero usted tiene que pedir prestado el dinero para entrar, \u00bfsacar\u00eda usted un pr\u00e9stamo?',
          responses: [
            { text: 'Definitivamente no.', value: 1 },
            { text: 'Tal vez.', value: 2 },
            { text: 'S\u00ed.', value: 3 },
          ],
        },
        {
          text:
            'Pregunta 7: Su empresa est\u00e1 vendiendo de acciones a los empleados. En tres a\u00f1os, la compa\u00f1\u00eda planea vender al p\u00fablico la empresa. Hasta entonces, usted no ser\u00e1 capaz de vender sus acciones y no recibir\u00e1 dividendos. Sin embargo, su inversi\u00f3n podr\u00eda multiplicarse por lo menos 10 veces cuando la empresa salga al p\u00fablico. \u00bfQu\u00e9 cantidad de dinero invertir\u00eda?',
          responses: [
            { text: 'Nada.', value: 1 },
            { text: 'Dos meses de sueldo.', value: 2 },
            { text: 'Cuatro meses de sueldo.', value: 3 },
          ],
        },
      ],
    }
  },
  computed: {
    canCreateUser() {
      return (
        this.name !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.estate !== '' &&
        this.profile !== ''
      )
    },
  },
  methods: {
    score() {
      let sum = 0
      this.userResponses.forEach(element => (sum = sum + element))
      if (sum >= 0 && sum <= 7) {
        this.profile = 'conservative'
        return 'Usted es de perfil Conservador'
      } else if (sum >= 7 && sum <= 11) {
        this.profile = 'moderately-conservative'
        return 'Usted es de perfil Moderadamente Conservador'
      } else if (sum >= 12 && sum <= 16) {
        this.profile = 'moderately-aggressive'
        return 'Usted es de perfil Moderadamente Agresivo'
      } else if (sum >= 17 && sum <= 21) {
        this.profile = 'aggressive'
        return 'Usted es de perfil Agresivo'
      }
    },
    async createUser() {
      console.log('hola')
      await db
        .collection('users')
        .add({
          name: this.name,
          email: this.email,
          password: this.password,
          birthdate: this.birthdate,
          estate: this.estate,
          profile: this.profile,
          img: '',
        })
        .catch(error => {
          console.log('Error creating user: ', error)
        })
      this.$router.push('/')
      alert('Usuario creado correctamente')
    },
  },
}
</script>
