<template>
  <v-container>
    <div>
      <v-toolbar dark prominent :src="require('../assets/cabecera.jpeg')">
        <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
        <v-toolbar-title>PARTES DEL CUERPO</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="mx-auto" tile>
        <v-list-item v-for="(item, i) in items" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title
              >Parte en español: {{ item.palabra }}</v-list-item-title
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
              <v-btn x-large color="#9C27B0" to="act_Cuerpo" dark>
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
      { palabra: "Antebrazo", sig1: "Juwa kasusu", sig2: "forearm" },
      {
        palabra: "Aparato respiratorio",
        sig1: "Ñaba bari",
        sig2: "respiratory system",
      },
      { palabra: "Ano", sig1: "Ã uria", sig2: "anus" },
      {
        palabra: "Aparato digestivo",
        sig1: "Yiko bi bari",
        sig2: "digestive system",
      },
      {
        palabra: "Articulación de la mano",
        sig1: "Juwa kõra kõra",
        sig2: "hand articulation",
      },
      {
        palabra: "Articulación de la muñeca",
        sig1: "Juwa kasusu kõra kõra",
        sig2: "wrist articulation",
      },
      {
        palabra: "Articulación de la rodilla",
        sig1: "Sãkoko kõra kõra",
        sig2: "knee articulation",
      },
      {
        palabra: "Articulación de los dedos de la mano",
        sig1: "Juwa jĩwini kõra kõra",
        sig2: "fingers articulation",
      },
      {
        palabra: "Articulación del codo",
        sig1: "Ãbidarra kõra kõra",
        sig2: "elbow articulation",
      },
      {
        palabra: "Articulación del hombro (omóplato)",
        Osig1: "kiwa kõra kõra",
        sig2: "shoulder articulation",
      },
      { palabra: "Articulación", sig1: "Kõra kõra", sig2: "articulation" },
      { palabra: "Amígdala", sig1: "Opita", sig2: "tonsil" },
      { palabra: "Axila", sig1: "Esoso", sig2: "underarm" },
      { palabra: "Barriga", sig1: "Bi", sig2: "belly" },
      {
        palabra: "Base de la oreja (cabeza del hueso maxilar)",
        sig1: "Urigi",
        sig2: "head of the maxillary bone",
      },
      { palabra: "Base del cráneo", sig1: "Amidudu", sig2: "skull base" },
      { palabra: "Bigote (barba)", sig1: "Ikara", sig2: "mustache/ beard" },
      { palabra: "Bíceps", sig1: "Juwa poto", sig2: "Biceps" },
      { palabra: "Borde de la nariz", sig1: "Kĩbu i", sig2: "Nose rim" },
      { palabra: "Borde de la oreja", sig1: "Kuwuru i", sig2: "Ear rim" },
      { palabra: "Bronquio", sig1: "Poto potoa kẽgu", sig2: "Bronchus" },
      {
        palabra: "Canal de la planta del pie (puente)",
        sig1: "Jĩru jã jogoa",
        sig2: "the sole of the foot",
      },
      { palabra: "Cadera", sig1: "Ãtenana", sig2: "Hip" },
      {
        palabra: "Canal de la espalda",
        sig1: "Ẽkarra jogoa",
        sig2: "Back canal",
      },
      { palabra: "Ceja", sig1: "Dau buwuru kara", sig2: "Eyebrow" },
      {
        palabra: "Centro de la palma de la mano",
        Jsig1: "uwa jã so",
        sig2: "Center of the palm of the hand",
      },
      { palabra: "Clavícula", sig1: "Obuwuru", sig2: "Clavicle" },
      { palabra: "Clítoris", sig1: "Bebede", sig2: "Clitoris" },
      { palabra: "Paladar", sig1: "Kida bajã", sig2: "Palate" },
      { palabra: "Cintura", sig1: "Kurru", sig2: "Waist" },
      { palabra: "Codo", sig1: "Ãbidarra", sig2: "Elbow" },
      { palabra: "Coxis", sig1: "Ãtuku", sig2: "Coccyx" },
      {
        palabra: "Dedo pulgar",
        sig1: "Juwa jĩwini papa",
        sig2: "Thumb finger",
      },
      {
        palabra: "Dedo anular",
        sig1: "Juwa jĩwini so are bema",
        sig2: "Ring finger",
      },
      {
        palabra: "Dedo corazón",
        sig1: "Juwa jĩwini ẽsadra bema",
        sig2: "Middle finger",
      },
      {
        palabra: "Dedo índice",
        sig1: "Juwa jĩwini aripe su bari",
        sig2: "Index finger",
      },
      { palabra: "Dedo del pie", sig1: "Jĩru jĩwini", sig2: "toe" },
      { palabra: "Dedo", sig1: "Jĩwini", sig2: "finger" },
      {
        palabra: "Dedo meñique",
        sig1: "Juwa jĩwini wãwa",
        sig2: "litle finger",
      },
      { palabra: "Diente", sig1: "Kidata", sig2: "tooth" },
      { palabra: "Encía", sig1: "Kida yara", sig2: "Gum" },
      { palabra: "Entrepierna", sig1: "Chigara", sig2: "Crotch" },
      { palabra: "Esófago", Osig1: "chiru", sig2: "Esophagus" },
      { palabra: "Espalda", sig1: "Ẽkarra", sig2: "Back" },
      { palabra: "Columna vertebral", sig1: "Esugu", sig2: "spine" },
      { palabra: "Pene", sig1: "Enedruma,", sig2: "enis" },
      { palabra: "Fosas nasales", sig1: "Kĩbu uria", sig2: "Nostrils" },
      { palabra: "Frente", sig1: "Datru", sig2: "forehead" },
      { palabra: "Garganta", sig1: "Ochiru buru", sig2: "throat" },
      { palabra: "Próstata", sig1: "Kaiwa", sig2: "prostate" },
      { palabra: "Hombro", sig1: "Okiwa", sig2: "shoulder" },
      { palabra: "Hígado", sig1: "Trãi", sig2: "liver" },
      {
        palabra: "Intestino grueso",
        sig1: "Jũsi borrõgoa",
        sig2: "large intestine",
      },
      { palabra: "Ingle", sig1: "Ãtae", sig2: "groin" },
      { palabra: "Lengua", sig1: "Kĩrame", sig2: "tongue" },
      {
        palabra: "Lóbulo de la oreja",
        sig1: "Kuwuru dõro dõro",
        sig2: "ear lobe",
      },
      { palabra: "Mano derecha", sig1: "Juwa ara", sig2: "right hand" },
      { palabra: "Mano izquierda", sig1: "Juwa auka", sig2: "left hand" },
      { palabra: "Mano", sig1: "Juwa jãso", sig2: "hand" },
      { palabra: "Muela", sig1: "Kida mogara", sig2: "molar" },
      { palabra: "Muela cordal", sig1: "Kida urigina", sig2: "wisdom teeth" },
      { palabra: "Nuca", sig1: "Rimisi", sig2: "nape" },
      { palabra: "Nuez de Adán", sig1: "Okotu", sig2: "adams’ nut" },
      { palabra: "Ombligo", sig1: "Komua", sig2: "Navel" },
      { palabra: "Oído", sig1: "Kuwuru", sig2: "ear" },
      { palabra: "Ojo", sig1: "Dabu", sig2: "eye" },
      { palabra: "Pantorrilla", sig1: "Jĩru poto", sig2: "calf" },
      { palabra: "Papada", sig1: "zuzu", sig2: "jowl" },
      { palabra: "Párpado", sig1: "Dau e", sig2: "eyelid" },
      { palabra: "Torax", sig1: "Trũa", sig2: "chest" },
      { palabra: "Pezón s.", sig1: "Ju kĩbu", sig2: "nipple" },
      { palabra: "Pómulo", sig1: "Kĩra buwuru", sig2: "cheek" },
      { palabra: "Pulmón", sig1: "Poto potoa", sig2: "lung" },
      { palabra: "Ápice", sig1: "Kĩrame kĩbu", sig2: "apex" },
      { palabra: "Riñón", sig1: "Kotrua", sig2: "kidney" },
      { palabra: "Seno", sig1: "Ju teta", sig2: "Breast" },
      { palabra: "Cerebro", sig1: "Buru morro", sig2: "brain" },
      { palabra: "Talón", sig1: "Jĩru ãbidarra", sig2: "heel" },
      { palabra: "Testículo", sig1: "Kãrata", sig2: "testicle" },
      { palabra: "Tobillo", sig1: "Jĩru korogo", sig2: "ankle" },
      { palabra: "Intestinos", Jsig1: "ũsi", sig2: "intestine" },
      { palabra: "Úvula", sig1: "Omimi", sig2: "uvula" },
      { palabra: "Uña", sig1: "Bichiwi", sig2: "nail" },
      { palabra: "Vagina", sig1: "Kẽ", sig2: "vagina" },
      {
        palabra: "Yema del dedo",
        sig1: "Juwa jĩwini kĩbu yara",
        sig2: "fingertip",
      },
    ],
  }),
};
</script>
