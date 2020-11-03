<template>
  <div class="briefcase px-2">
    <div class="briefcase-title pl-4">
      <v-icon color="primary">mdi-briefcase</v-icon>
      <h2 class="pl-4">
        Portafolios
      </h2>
    </div>
    <div class="briefcase-graph px-2">
      <h4 class="ml-6">
        Gráfico de tendencia
      </h4>
      <img src="@/assets/images/graph1.png" style="width: 100%;" />
    </div>
    <v-list subheader two-line>
      <v-list-item
        v-for="briefcase in briefcases"
        :key="briefcase.title"
        @click="openBriefcase(briefcase)"
      >
        <v-list-item-avatar>
          <v-icon
            :class="briefcase.color"
            dark
            v-text="briefcase.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="briefcase.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-card>
            {{ briefcase.growth }}
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
      briefcases: [
        {
          color: 'blue',
          icon: 'mdi-numeric-1-circle',
          title: 'Mi Portafolio 1',
          growth: '$904.000',
          image: 'briefcase1.png',
        },
        {
          color: 'green',
          icon: 'mdi-numeric-2-circle',
          title: 'Mi Portafolio 2',
          growth: '$740.000',
          image: 'briefcase2.png',
        },
        {
          color: 'brown',
          icon: 'mdi-numeric-3-circle',
          title: 'Mi Portafolio 3',
          growth: '$650.900',
          image: 'briefcase3.png',
        },
      ],
    }
  },
  methods: {
    openBriefcase(briefcase) {
      this.$emit('open-briefcase', briefcase)
    },
  },
}
</script>
<style lang="scss">
.briefcase {
  background: white;
  .briefcase-title {
    display: flex;
  }
  .briefcase-graph {
    color: black;
    margin-top: 8px;
  }
}
</style>
