<template>
  <div>
    <v-carousel v-model="model" height="110" hide-delimiters>
      <v-carousel-item v-for="value in values" :key="value.title">
        <v-sheet class="pt-4" height="100%" tile>
          <v-row align="center" justify="center">
            <div>{{ value.title }}</div>
          </v-row>
          <v-row align="center" justify="center">
            <div class="display-1">{{ value.money }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-list subheader two-line>
      <v-list-item v-for="goal in goals" :key="goal.title">
        <v-list-item-avatar>
          <v-icon :class="goal.color" dark v-text="goal.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="goal.title"></v-list-item-title>

          <v-list-item-subtitle v-text="goal.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-card>
            {{ goal.price }}
          </v-card>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      values: [
        {
          title: 'Balance Actual',
          money: '$21.504.054',
        },
        {
          title: 'Meta',
          money: '$94.500.000',
        },
        {
          title: 'Invertido',
          money: '$20.500.000',
        },
      ],
      goals: [
        {
          color: 'teal',
          icon: 'mdi-fridge-outline',
          subtitle: 'Oct, 2020',
          title: 'Remodelación Cocina',
          price: '$2.000.000',
        },
        {
          color: 'pink',
          icon: 'mdi-cellphone-iphone',
          subtitle: 'Mar, 2021',
          title: 'Iphone 12 pro',
          price: '$1.500.000',
        },
        {
          color: 'orange',
          icon: 'mdi-beach',
          subtitle: 'Ene, 2022',
          title: 'Vacaciones Disney',
          price: '$5.000.000',
        },
        {
          color: 'red',
          icon: 'mdi-car-sports',
          subtitle: 'Dic, 2024',
          title: 'Tesla Model S',
          price: '$36.000.000',
        },
        {
          color: 'light-blue',
          icon: 'mdi-home-modern',
          subtitle: 'Dic, 2028',
          title: 'Pie Casa Nueva',
          price: '$50.000.000',
        },
      ],
    }
  },
}
</script>
