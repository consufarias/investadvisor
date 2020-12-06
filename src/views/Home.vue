<template>
  <v-layout class="d-flex flex-column">
    <v-card width="100%">
      <v-toolbar color="primary" dark flat>
        <v-btn icon @click="tab = 'Profile'">
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-toolbar-title>Hola Marlyn</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="tab = 'History'">
          <v-icon>mdi-cash-register</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-content>
      <profile v-if="tab === 'Profile'" />
      <history v-else-if="tab === 'History'" />
      <recomendations
        v-else-if="tab === 'Recomendations'"
        @show-briefcase="showBriefcase"
      />
      <briefcase
        v-else-if="tab === 'briefcase'"
        @open-briefcase="openBriefcase"
      />
      <my-briefcase
        v-else-if="tab === 'myBriefcase'"
        :selectedBriefcase="selectedBriefcase"
        @show-briefcase="showBriefcase"
      />
      <dashboard v-else />
    </v-content>

    <v-bottom-navigation
      fixed
      color="background"
      background-color="primary"
      grow
    >
      <v-btn @click="tab = 'Dashboard'">
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn @click="tab = 'Recomendations'">
        <span>Recomendaciones</span>
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import Recomendations from '@/components/Recomendations'
import Profile from '@/components/Profile'
import History from '@/components/History'
import Briefcase from '@/components/Briefcase'
import MyBriefcase from '@/components/MyBriefcase'

export default {
  data() {
    return {
      tab: 'Dashboard',
      items: ['Dashboard', 'Recomendaciones'],
      selectedBriefcase: {},
    }
  },
  components: {
    Dashboard,
    Recomendations,
    Profile,
    History,
    Briefcase,
    MyBriefcase,
  },
  methods: {
    showBriefcase() {
      this.tab = 'briefcase'
    },
    openBriefcase(briefcase) {
      this.tab = 'myBriefcase'
      this.selectedBriefcase = briefcase
    },
  },
}
</script>
