<template>
  <div id="Questionnaire">
    <div id="questionnaire">
      <input v-model="id_user" type="text" name="formCheck-1" />
      <h1>Question</h1>
      <h2 v-bind="question" :value="selected.user.question">
        {{ selected.user.question }}
      </h2>

      <div
        v-bind="question"
        class="form-check"
        v-cloak
        v-for="v in selected.user.question_answer"
        :key="v.id"
      >
        <input
          :value="v.answer_content"
          v-model="answer_content"
          type="radio"
          name="formCheck-1"
        />
        <label class="form-check-label" for="formCheck-1">{{
          v.answer_content
        }}</label>
      </div>
      <br />
      <button
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
        @click="envoyer"
      >
        Question suivante
      </button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Questionnaire",

  data: function () {
    return {
      answer_content: "",
      answer_status: "true",
      question: "",
      nom_questionnaire: "",
      id_user: "",
      tik: 0,
      selected: {
        user: {
          type_question: "",
          id_questions: "",
          question_answer: Array,
        },
      },
    };
  },
  created() {
    this._id = this.$route.params._id;
    console.log(this._id);
  },
  methods: {
    envoyer() {
      this.tik = this.tik + 1;
      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          nom_questionnaire: this._id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      console.log(requestOpt);
      fetch("http://localhost:3000/success/getRandUs", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          var result1 = JSON.parse(result);
          var result2 = shuffle(result1);
          this.selected.user = result2[0];
        })
        .catch((error) => {
          console.log("error", error);
        });
      const requestSend = {
        method: "POST",
        body: JSON.stringify({
          id_user: this.id_user,
          question_answer: this.question_answer,
          answer_content: this.answer_content,
          question: this.selected.user.question,
          answer_status: this.answer_status,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/saveAnswer", requestSend)
        .then((response) => response.text())
        .then((result) => {
          this.nom_questionnaire = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.answer_content = "";
    },
  },
};
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
</script>


