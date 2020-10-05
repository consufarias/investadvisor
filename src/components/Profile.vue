<template>
  <div>
    <v-row justify="center" class="fill-height mt-2">
      <v-avatar color="grey" size="164">
        <v-img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHgzY9l96h7xw/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=T5hCj1kBDG-3AqpkxtPvOKWXWWyGXGXL9yPmiYMPG_c"
        ></v-img>
      </v-avatar>
    </v-row>
    <v-row justify="center" class="font-weight-bold mt-2">
      <h2>{{ name }}</h2>
    </v-row>
    <v-row justify="center" class="white--text mb-4">
      <div>
        {{ email }}
      </div>
    </v-row>
    <v-list subheader two-line dark>
      <v-list-item v-for="datum in personalInformation" :key="datum.type">
        <v-list-item-avatar>
          <v-icon dark v-text="datum.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="datum.type"></v-list-item-title>

          <v-list-item-subtitle v-text="datum.value"></v-list-item-subtitle>
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
export default {
  data() {
    return {
      name: 'Marlyn Meza',
      email: 'marlmeza@alumnos.uai.cl',
      personalInformation: [
        {
          type: 'Fecha de Nacimiento',
          value: '21-06-1998',
          icon: 'mdi-cake-variant',
        },
        {
          type: 'Tipo de Perfil',
          value: 'Riesgoso',
          icon: 'mdi-face-profile-woman',
          edit: true,
        },
        {
          type: 'Patrimonio',
          value: '$13.580.000',
          icon: 'mdi-cash-multiple',
        },
      ],
    }
  },
}
</script>
