<template>
  <v-container>
    <div>
      <v-toolbar dark prominent :src="require('../assets/cabecera.jpeg')">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
        <v-toolbar-title>Frutas y verduras</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(item, i) in items" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title
              >Fruta/Verdura en español: {{ item.palabra }}</v-list-item-title
            >
            <v-list-item-subtitle>Emberá: {{ item.sig1 }}</v-list-item-subtitle>
            <v-list-item-subtitle>Inglés: {{ item.sig2 }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <div>
      <v-row align="center">
        <v-col cols="12" sm="12">
          <div class="text-center">
            <div class="my-2">
              <v-btn x-large color="#9C27B0" to="act_Fruver" dark>
                Actividades
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Saludos",
  data: () => ({
    items: [
      { palabra: "Aguacate", sig1: "Bego", sig2: "Avocado" },
      { palabra: "Yuca", sig1: "Ikade", sig2: "Yuca" },
      { palabra: "Achiote", sig1: "Kãyi", sig2: "achiote" },
      { palabra: "Ají", sig1: "Pida", sig2: "chili" },
      { palabra: "Caña de azúcar", sig1: "Chãsõ", sig2: "sugar cane" },
      { palabra: "Chontaduro", sig1: "Jẽga", sig2: "chontaduro" },
      { palabra: "Granadilla", sig1: "Dursusujõ", sig2: "granadilla" },
      {
        palabra: "Guayaba agria",
        sig1: "Ne oregea bakuru",
        sig2: "sour guava",
      },
      { palabra: "Guayaba", sig1: "Pũrijõ", sig2: "guava" },
      { palabra: "Limón", sig1: "Ne oregea", sig2: "lemon" },
      { palabra: "Plátano hartón", sig1: "Padara zroma", sig2: "plantain" },
      { palabra: "Plátano morado", sig1: "Nari pada", sig2: "purple plantain" },
    ],
  }),
};
</script>
