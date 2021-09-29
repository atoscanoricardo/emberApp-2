<template>
  <v-container grid-list-md>
    <v-card max-width="500" class="mx-auto">
      <v-toolbar :color="selection.length ? '#3ead43' : '#4CAF50'" dark>
        <v-app-bar-nav-icon
          v-if="!selection.length"
          to="/saludos"
        ></v-app-bar-nav-icon>
        <v-btn v-else icon @click="selection = []">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>
          {{
            selection.length
              ? `${selection.length} selected`
              : "Actividad de Saludos"
          }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-scale-transition>
          <v-btn v-if="selection.length" key="export" icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
        </v-scale-transition>
        <v-scale-transition>
          <v-btn v-if="selection.length" key="delete" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-scale-transition>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <p class="font-weight-black">Actividad 1</p>
        <p class="font-weight-regular">
          Seleccione las frutas y verduras en Embera y español
        </p>
        <v-card class="mx-auto" max-width="500">
          <img
            :src="require('../assets/fruver_act1.jpeg')"
            width="340"
            :aspect-ratio="16 / 9"
          />
          <v-select
            v-model="selection"
            :items="items"
            multiple
            label="Selecciona las frutas"
            width="200"
            outlined
            dense
          ></v-select>
          <div>
            <v-row align="center">
              <v-col cols="12" sm="12">
                <div class="text-center">
                  <div class="my-2">
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="cyan"
                      @click="validateAct1"
                    >
                      <i class="fas fa-check" x-large></i>
                    </v-btn>
                  </div>
                  <v-card-text>
                    {{ resultAct1 }}
                  </v-card-text>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-card-text>
      <v-card-text>
        <p class="font-weight-black">Actividad 2</p>
        <p class="font-weight-regular">
          Seleccione las fruta en lenguaje emberá o ingles para cada imágen
        </p>

        <v-card
          v-for="(card, i) in cards"
          :key="i"
          class="mx-auto"
          max-width="500"
          outlined
        >
          <v-img :src="require(`../assets/${card.img}`)" height="200px"></v-img>

          <v-card-title> Opciones </v-card-title>
          <v-alert
            v-if="msg_res[i]"
            dense
            dismissible
            text
            :type="msg_res[i].type"
            >{{ msg_res[i].msg }}</v-alert
          >
          <v-card-subtitle>
            <v-radio-group v-if="answer[i]" v-model="test_values[i]">
              <v-radio value="true" :label="card.text_true" />
              <v-radio value="false" :label="card.text_false" />
            </v-radio-group>
            <v-radio-group v-else v-model="test_values[i]">
              <v-radio value="false" :label="card.text_false" />
              <v-radio value="true" :label="card.text_true" />
            </v-radio-group>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="#4CAF50" @click="validateAnswer(i)">
              Validar respuesta
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="showInfo(i)">
              <i
                :class="
                  shows[i].show ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
                "
              ></i>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="shows[i].show">
              <v-divider></v-divider>
              <v-card-text>
                <b>Saludo:</b> {{ shows[i].text_true }} <br /><b
                  >Significado:</b
                >
                {{ shows[i].val }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    msg: "Yes",
    show: true,
    shows: [],
    selection: [],
    items: [
      "Ñai",
      "Mitia jarai",
      "Bego",
      "Ikade",
      "Buda ẽzoai",
      "Taba totoi",
      "Kãyi",
      "Pida",
      "Sõi",
      "Ãgai",
      "Kãii",
      "Chãsõ",
      "chontaduro",
      "granadilla",
      "sour guava",
      "guava",
    ],
    correct: [
      "Bego",
      "Ikade",
      "Kãyi",
      "Pida",
      "Chãsõ",
      "chontaduro",
      "granadilla",
      "sour guava",
      "guava",
    ],
    resultAct1: "",
    cards: [
      {
        img: "limon.jpeg",
        text_false: "Pũrijõ",
        text_true: "Ne oregea",
        val: "Limón",
      },
      {
        img: "aguacate.png",
        text_false: "Kãyi",
        text_true: "Bego",
        val: "Aguacate",
      },
      {
        img: "aji.jpeg",
        text_false: "apple",
        text_true: "chili",
        val: "ají",
      },
      {
        img: "guayaba.jpeg",
        text_false: "Avocado",
        text_true: "guava",
        val: "guayaba",
      },
    ],

    answer: [],
    test_values: [],
    msg_res: [],
  }),
  methods: {
    fillAnswers() {
      var n = this.cards.length;
      this.answer = this.randomAnswer(n);
      this.shows = new Array(n).fill({ visible: false });
    },
    randomAnswer(n) {
      return new Array(n)
        .fill(1)
        .map(() => Boolean(Math.random() >= 0.5 ? 1 : 0));
    },
    validateAnswer(i) {
      var isCorrect = this.test_values[i] === "true";
      if (isCorrect) {
        this.$set(this.msg_res, i, { msg: "Excelente", type: "success" });
      } else {
        this.$set(this.msg_res, i, { msg: "Incorrecto", type: "error" });
      }
    },
    validateAct1() {
      var cont = 0;
      this.selection.map((s) =>
        this.correct.map((c) => (cont += s == c ? 1 : 0))
      );
      console.log(cont);
      if (cont == this.correct.length) {
        this.resultAct1 = "Excelente, todo correcto";
      } else if (cont < this.correct.length) {
        this.resultAct1 = `Hay elementos correctos pero te faltó encontrar ${
          this.correct.length - cont
        }`;
      } else if (cont == 0) {
        this.resultAct1 = "Aún no defines correctamente los saludos";
      } else {
        this.resultAct1 = "Aún no defines correctamente los saludos";
      }
    },
    showInfo(i) {
      var value = !this.shows[i].show;
      var text_true = this.cards[i].text_true;
      var val = this.cards[i].val;
      this.$set(this.shows, i, { show: value, text_true, val });
    },
  },
  created() {
    this.fillAnswers();
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
