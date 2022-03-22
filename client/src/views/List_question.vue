<template>
  <div id="List_question">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h4>Liste questionnaire</h4>
    <br />
    <br />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">Question</th>
            <th style="width: 20%">Type de question</th>
            <th style="width: 20%">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind="question" v-for="v in question" :key="v.question">
            <td>{{ v.question }}</td>
            <td>{{ v.type_question }}</td>

            <td><button @click="supprimer(v._id)">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "List_question",

  data: function () {
    return {
      question: "",
      code: "",
    };
  },
  methods: {
    tirer() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getQuestion", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.question = JSON.parse(result);
          this.type_question = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    supprimer(id) {
      console.log(id);
      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/deleteQuestion", requestOpt)
        .then((result) => {
          this._id = result;
        })
        .catch((error) => {
          console.log("error", error);
        });
      setTimeout(
        function () {
          window.location.reload();
        }.bind(this),
        10
      );
    },
  },
  created() {
    this.tirer();
  },
};
</script>