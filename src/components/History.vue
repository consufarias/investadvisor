<template>
  <div>
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
          <v-card>
            {{ recomendation.invested }}
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
      recomendations: [
        {
          title: 'Balance',
          invested: 'Inversión',
        },
        {
          color: 'green',
          icon: 'mdi-trending-up',
          subtitle: 'Banco Santander',
          title: '$1.083.468',
          invested: '$10.000.000',
        },
        {
          color: 'green',
          icon: 'mdi-trending-up',
          subtitle: 'Tesla Motors',
          title: '$310.421',
          invested: '$5.000.000',
        },
        {
          color: 'blue',
          icon: 'mdi-trending-neutral',
          subtitle: 'Banco BBVA',
          title: '$0',
          invested: '$2.500.000',
        },
        {
          color: 'red',
          icon: 'mdi-trending-down',
          subtitle: 'SOCOVESA',
          title: '-$176.042',
          invested: '$1.000.000',
        },
        {
          color: 'red',
          icon: 'mdi-trending-down',
          subtitle: 'LATAM Airlines',
          title: '-$213.793',
          invested: '$2.000.000',
        },
      ],
    }
  },
}
</script>
