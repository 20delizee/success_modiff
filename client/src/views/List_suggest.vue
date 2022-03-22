<template>
  <div id="List_suggest">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h4>Liste des suggestions de questions</h4>
    <br />
    <br />
    <button
      v-bind="nom_questionnaire"
      v-for="v in nom_questionnaire"
      :key="v.nom_questionnaire"
      @click="go(v.nom_questionnaire)"
      :name="nom_questionnaire"
      id="nom"
    >
      {{ v.nom_questionnaire }}
    </button>
    <br />
    <br />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">Nom questionnaire</th>
            <th style="width: 20%">Question</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind="question" v-for="v in question" :key="v.question">
            <td id="nom_questionnaires">{{ v.nom_questionnaire }}</td>
            <td id="questions">{{ v.question }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "List_suggest",

  data: function () {
    return {
      question: "",
      nom_questionnaire: "",
    };
  },

  methods: {
    go() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getSuggest", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          //var res = JSON.parse(result);
          //res.forEach((element) => {
          //  if (element.nom_questionnaire == nom_questionnaire) {
          //      console.log(element);
          //      document.getElementById('nom_questionnaires').innerHTML += ' ' + element.nom_questionnaire + '';
          //      document.getElementById('questions').innerHTML += ' ' + element.question + '';
          //  }
          //});
          this.nom_questionnaire = JSON.parse(result);
          this.question = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    sugg() {
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
    this.sugg();
    this.go();
  },
};
</script>
