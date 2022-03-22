<template>
  <div id="List_suggest2">
    <router-link to="/Correcteur"><button>Accueil</button></router-link
    ><br /><br />
    <router-link to="/List_suggest"
      ><button>Aller a la liste des matieres</button></router-link
    >
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
            <td>{{ nom_questionnaire }}</td>
            <td>{{ question }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
        @click="tirer"
      >cc</button>
  </div>
</template>
<script>
export default {
  name: "List_suggest2",
  data: function () {
    return {
      nom_question: "",
      question: "",
    };
  },
  created() {
    this.nom_questionnaire = this.$route.params.nom_questionnaire;
    console.log(this.nom_questionnaire);
  },
  methods: {
    tirer() {
            const requestOpt = { method: "GET", redirect: "follow" };

      console.log(requestOpt)
      fetch("http://localhost:3000/success/getSuggest", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          var res = JSON.parse(result);
          res.nom_questionnaire
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>