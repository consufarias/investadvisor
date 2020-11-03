<template>
  <div class="briefcase px-2">
    <div class="briefcase-title pl-4">
      <v-icon color="primary" @click="goBack()">mdi-arrow-left</v-icon>
      <h2 class="pl-4">
        {{ selectedBriefcase.title }}
      </h2>
    </div>
    <div class="briefcase-graph px-2">
      <h4 class="ml-6">
        Gráfico de tendencia
      </h4>
      <img
        v-if="selectedBriefcase.image === 'briefcase1.png'"
        src="@/assets/images/briefcase1.png"
        style="width: 100%;"
      />
      <img
        v-else-if="selectedBriefcase.image === 'briefcase2.png'"
        src="@/assets/images/briefcase2.png"
        style="width: 100%;"
      />
      <img
        v-else-if="selectedBriefcase.image === 'briefcase3.png'"
        src="@/assets/images/briefcase3.png"
        style="width: 100%;"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedBriefcase: {},
  },
  methods: {
    goBack() {
      this.$emit('show-briefcase')
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
