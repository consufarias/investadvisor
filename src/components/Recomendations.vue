<template>
  <div class="recomendations-container">
    <v-list subheader two-line>
      <v-list-item
        v-for="recomendation in recomendations"
        :key="recomendation.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="recomendation.color"
            dark
            v-text="recomendation.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="recomendation.title"></v-list-item-title>

          <v-list-item-subtitle
            v-text="recomendation.subtitle"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="primary">mdi-cash-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-btn
      class="transparent briefcase-btn mt-4 white--text"
      @click="showBriefcase"
    >
      <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>
      Portafolios de Inversion
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recomendations: [
        {
          color: 'red',
          icon: 'mdi-bank',
          subtitle: 'Rentabilidad: +7%',
          title: 'Banco Santander',
        },
        {
          color: 'red',
          icon: 'mdi-car-sports',
          subtitle: 'Rentabilidad: +5.1%',
          title: 'Tesla Motors',
        },
        {
          color: 'blue',
          icon: 'mdi-bank',
          subtitle: 'Rentabilidad: +2.26%',
          title: 'Banco BBVA',
        },
        {
          color: 'green',
          icon: 'mdi-home',
          subtitle: 'Rentabilidad: +1.54%',
          title: 'SOCOVESA',
        },
        {
          color: 'blue',
          icon: 'mdi-airplane',
          subtitle: 'Rentabilidad: +0.3%',
          title: 'LATAM Airlines',
        },
      ],
    }
  },
  methods: {
    showBriefcase() {
      this.$emit('show-briefcase')
    },
  },
}
</script>
<style lang="scss">
.recomendations-container {
  display: flex;
  flex-direction: column;
}
.briefcase-btn {
  height: 70px !important;
}
</style>
