<template>
  <div>
    <v-row justify="center" class="fill-height mt-2">
      <v-avatar color="grey" size="164">
        <v-img :src="userInfo.img" />
      </v-avatar>
    </v-row>
    <v-row justify="center" class="font-weight-bold mt-2">
      <h2>{{ userInfo.name }}</h2>
    </v-row>
    <v-row justify="center" class="white--text mb-4">
      <div>
        {{ userInfo.email }}
      </div>
    </v-row>
    <v-list subheader two-line dark>
      <v-list-item v-for="datum in personalInformation" :key="datum.type">
        <v-list-item-avatar>
          <v-icon dark v-text="datum.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="datum.type"></v-list-item-title>

          <v-list-item-subtitle v-text="userInfo[datum.value]" />
        </v-list-item-content>

        <v-list-item-action v-if="datum.edit">
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: 'Marlyn Meza',
      email: 'marlmeza@alumnos.uai.cl',
      personalInformation: [
        {
          type: 'Fecha de Nacimiento',
          value: 'birthdate',
          icon: 'mdi-cake-variant',
        },
        {
          type: 'Tipo de Perfil',
          value: 'profile',
          icon: 'mdi-face-profile-woman',
          edit: true,
        },
        {
          type: 'Patrimonio',
          value: 'estate',
          icon: 'mdi-cash-multiple',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
}
</script>
