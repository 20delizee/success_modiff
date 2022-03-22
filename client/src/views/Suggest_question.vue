coucou
<template>
  <div id="suggest">
    <router-link to="/Collaborateur"><button>Accueil</button></router-link>
    <router-view />
    <br />
    <br />
    <h1>Suggestion de la Question</h1>
    <br />
    <br />
    <h4>Intitulé de la question:</h4>
    <input type="text" v-model="question" />
    <br />
    <br />
    <h4>catégorie de la question</h4>
    <select v-model="id_matiere" v-bind="nom_questionnaire">
      <option
        v-for="v in nom_questionnaire"
        v-bind:key="v.nom_questionnaire"
        v-text="v.nom_questionnaire"
        :value="v.nom_questionnaire"
      ></option>
    </select>
    <br />
    <br />
    <h2>
      <button
        @click="envoyer"
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
      >
        Suggérer la question
      </button>
    </h2>
  </div>
</template>
<script>
export default {
  name: "suggest",
  data: function () {
    return {
      id_matiere: "",
      nom_questionnaire: "",
      question: "",
    };
  },
  methods: {
    envoyer() {
      const requestSend = {
        method: "POST",
        body: JSON.stringify({
          question: this.question,

          nom_questionnaire: this.id_matiere,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/savesuggest", requestSend)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.question = "";
      this.id_matiere = "";
      setTimeout(
        function () {
          window.location.reload();
        }.bind(this),
        50
      );
    },
    tirer() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getMatiere", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.nom_questionnaire = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  created() {
    this.tirer();
  },
};
</script>