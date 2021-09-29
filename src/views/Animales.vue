<template>
  <v-container>
    <div>
      <v-toolbar dark prominent :src="require('../assets/cabecera.jpeg')">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
        <v-toolbar-title>ANIMALES</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(item, i) in items" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title
              >Animal en españos: {{ item.palabra }}</v-list-item-title
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
              <v-btn x-large color="#9C27B0" to="act_Animales" dark>
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
      { palabra: "Abeja", sig1: "Kemi", sig2: "Bee" },
      { palabra: "Águila", sig1: "Ãparrajo", sig2: "Eagle" },
      { palabra: "Águila", sig1: "espe Chijẽ", sig2: "Eagle" },
      { palabra: "Alcatraz", sig1: "Turra", sig2: "Alcatraz" },
      { palabra: "Anolis", sig1: "Jimo", sig2: "Anolis" },
      { palabra: "Araña", sig1: "Burugu", sig2: "Spide" },
      { palabra: "Ardilla grande", sig1: "Butu", sig2: "Squirrel" },
      { palabra: "Ardita", sig1: "Chidima", sig2: "Red tailed squirrel" },
      { palabra: "Armadillo", sig1: "Tro", sig2: "	Armadillo" },
      { palabra: "Ave", sig1: "espe Tãtão", sig2: "Bird" },
      { palabra: "Ave", sig1: "Ibana", sig2: "	Bird" },
      { palabra: "Avispa", sig1: "Nedurru", sig2: "Wasp" },
      { palabra: "Adichichi", sig1: "Grillo", sig2: "Cricket" },
      { palabra: "Babosa", sig1: "Daburĩba", sig2: "Slug" },
      { palabra: "Bagre pintado", sig1: "	Bõpa", sig2: "Catfish" },
      { palabra: "Barbudo", sig1: "Babu", sig2: "Barbudo fish" },
      { palabra: "Boa", sig1: "Jẽpã Boa", sig2: "Snake" },
      { palabra: "Bocachico", sig1: "Kisaba", sig2: "	Bocachico fish" },
      { palabra: "Buho", sig1: "Bõbõra", sig2: "	Owl" },
      { palabra: "Caimán", sig1: "Kore", sig2: "	Alligator" },
      { palabra: "Camaleón espe", sig1: "Oigamia", sig2: "Chameleon" },
      { palabra: "Camarón", sig1: "Bũra", sig2: "Shrimp" },
      { palabra: "Cangrejo de agua", sig1: "Bara bara", sig2: "Water Crab" },
      { palabra: "Caracol", sig1: "Korogo", sig2: "	Snail" },
      { palabra: "Cangrejo", sig1: "Chikue", sig2: "	Crab" },
      {
        palabra: "Ave de rapiña",
        sig1: "Ne ko baria yara",
        sig2: "Bird of Prey",
      },
      { palabra: "Cerdo", sig1: "China", sig2: "	Pig" },
      { palabra: "Chalá", sig1: "Nuyer", sig2: "	Chala" },
      { palabra: "Charúa", sig1: "Ãparra Charua", sig2: "fish" },
      { palabra: "Chorlito", sig1: "Domia", sig2: "Plover" },
      { palabra: "Colibrí", sig1: "Chĩbisu", sig2: "Hummingbird" },
      { palabra: "Comején", sig1: "De dru", sig2: "Termite" },
      { palabra: "Cucaracha", sig1: "Kẽberre", sig2: "Cockroach" },
      {
        palabra: "Cucaracha de agua",
        sig1: "Dokẽberre",
        sig2: "Water Cockroach",
      },
      { palabra: "Cuervo", sig1: "Semi", sig2: "Raven" },
      { palabra: "Culebra", sig1: "Dama", sig2: "Snake" },
      { palabra: "Danta", sig1: "Dãda", sig2: "Danta" },
      { palabra: "Gallina", sig1: "Eterre", sig2: "Hen" },
      { palabra: "Gallinazo", sig1: "Ãkoso", sig2: "Buzzard" },
      { palabra: "Gallineta", sig1: "Zokorro", sig2: "Guinea Fowl" },
      { palabra: "Gallo", sig1: "Eterre makẽra", sig2: "Rooster" },
      { palabra: "Gato", sig1: "Michi", sig2: "Cat" },
      { palabra: "Gavilán", sig1: "Jeumiajo", sig2: "Hawk" },
      { palabra: "Gorgojo", sig1: "Chĩmia", sig2: "Weevil" },
      { palabra: "Grillo", sig1: "Adichichi", sig2: "Grasshopper" },
      { palabra: "Guacamayo", sig1: "Bagara", sig2: "Macaw" },
      { palabra: "Guasalé", sig1: "Bichi", sig2: "Toucan" },
      { palabra: "Gusano", sig1: "Karagamia", sig2: "Worm" },
      { palabra: "Gusarapo", sig1: "Do ki", sig2: "Tadpole" },
      { palabra: "Hormiga espe", sig1: "Arrapacha", sig2: "Ant" },
      { palabra: "Hormiga arriera", sig1: "Trã", sig2: "Fire ant" },
      { palabra: "Hormiga conga", sig1: "Jẽsẽra", sig2: "Bullet ant" },
      { palabra: "Iguana", sig1: "Opoga", sig2: "Iguana" },
      { palabra: "Jabalí", sig1: "Bido", sig2: "Wild Pig" },
      { palabra: "Jején", sig1: "Põjara", sig2: "Gnat" },
      { palabra: "Lombrizde tierra", sig1: "Mokita", sig2: "	Earthworm" },
      { palabra: "Lombriz intestinal", sig1: "Newede", sig2: "Roundworm" },
      { palabra: "Loro", sig1: "Kare", sig2: "	Parrot" },
      { palabra: "Mariposa", sig1: "Baga baga", sig2: "Butterfly" },
      { palabra: "Marta", sig1: "Ũra", sig2: "	Marten" },
      { palabra: "Martín pescador", sig1: "	Ãsasa", sig2: "	Kingfisher" },
      { palabra: "Mirlo", sig1: "Okoko", sig2: "	Blackbird" },
      { palabra: "Mojarra", sig1: "Bosuka", sig2: "	Mojarra fish" },
      { palabra: "Mono colorado", sig1: "	Zrũa", sig2: "	Red Monkey" },
      { palabra: "Mono prieto", sig1: "	Yerre", sig2: "	Black monkey" },
      { palabra: "Mono tití", sig1: "	Emechichi", sig2: "	Titi Monkey" },
      { palabra: "Moncholo", sig1: "Nusi wãwa", sig2: "Moncholo fish" },
      { palabra: "Mosca de agua", sig1: "	Do kichi kichi", sig2: "Fly" },
      { palabra: "Mosquito", sig1: "Suna", sig2: "	Mosquito" },
      { palabra: "Murciélago grande", sig1: "Kũrugu", sig2: "Bat" },
      { palabra: "Nutria", sig1: "Baberama", sig2: "	Otter" },
      { palabra: "Nutria pequeña", sig1: "Dogawira", sig2: "Little Otter" },
      { palabra: "Ñeque", sig1: "Kuriwa", sig2: "Agouti" },
      { palabra: "Oso", sig1: "Wi", sig2: "Bear" },
      { palabra: "Pájaro carpintero", sig1: "	Sornene", sig2: "Woodpecker" },
      { palabra: "Pajuil", sig1: "Zamo", sig2: "Pajuil bird" },
      { palabra: "Paloma", sig1: "Uma", sig2: "Dove" },
      { palabra: "Pantera", sig1: "Imama paima", sig2: "Panther" },
      { palabra: "Pato-cuervo", sig1: "Dope", sig2: "Cormorant" },
      { palabra: "Pava de monte", sig1: "Tusi", sig2: "Dusky-legged guan" },
      { palabra: "Pavo", sig1: "Sũbibi", sig2: "Turkey" },
      { palabra: "Perezoso", sig1: "Koa", sig2: "Sloth" },
      { palabra: "Perdiz", sig1: "Zuerru", sig2: "Partridge bird" },
      {
        palabra: "Perico ligero amarillo",
        sig1: "Jewara",
        sig2: "Yellow parakeet",
      },
      {
        palabra: "Perico ligero blanco",
        sig1: "Bucha",
        sig2: "White parakeet",
      },
      { palabra: "Perro", sig1: "Usa", sig2: "Dog" },
      { palabra: "Piojo", sig1: "Tũ", sig2: "Louse" },
      { palabra: "Ponche", sig1: "Do Kuriwa", sig2: "Capybara" },
      { palabra: "Puerco espín", sig1: "Pĩwini", sig2: "Porcupine" },
      { palabra: "Ratón de monte", sig1: "Kado", sig2: "Wild mouse" },
      { palabra: "Rana", sig1: "Bauba", sig2: "Frog" },
      { palabra: "Rana venenosa", sig1: "	Kõe kõe", sig2: "Poisonous Frog" },
      {
        palabra: "Reygallinazo",
        sig1: "Ãkoso torro",
        sig2: "buru urua chu bua	King vulture",
      },
      { palabra: "Sanguijuela", sig1: "Kadomiaba", sig2: "Leech" },
      { palabra: "Sapo", sig1: "Bokorro", sig2: "	Toad" },
      { palabra: "Sardina", sig1: "Amayirri", sig2: "	Pilchard" },
      { palabra: "Tatabro", sig1: "Bidowe", sig2: "	Tayassu" },
      { palabra: "Tarántula", sig1: "Dorema", sig2: "	Tarantula" },
      { palabra: "Tigre", sig1: "Imama", sig2: "	Tiger" },
      { palabra: "Tórtola", sig1: "Pũsĩra", sig2: "	Pigeon" },
      { palabra: "Tucán", sig1: "Kẽwara", sig2: "	Toucan" },
      { palabra: "Vaca", sig1: "Paka", sig2: "	Cow" },
      { palabra: "Yalúa", sig1: "Kachirũba", sig2: "	Yalua" },
      { palabra: "Zorra chucha", sig1: "	Bosãi", sig2: "	Fox" },
    ],
  }),
};
</script>
