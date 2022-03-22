<template>
  <div id="Questionnaire_pass">
    <router-link to="/Collaborateur"><button>Accueil</button></router-link>
    <br />
    <br />
    <h3>Liste des questionnaires</h3>
    <h4>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 20%">Nom questionnaire</th>
              <th style="width: 20%">Code pour rejoindre</th>
              <th style="width: 20%">Passer le questionnaire</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-bind="nom_questionnaire"
              v-for="v in nom_questionnaire"
              :key="v.nom_questionnaire"
            >
              <td>{{ v.nom_questionnaire }}</td>
              <td>{{ v.code }}</td>
              <td>
                <button @click="go(v._id)" id="code">x</button>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
      </div>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Questionnaire_pass",

  data: function () {
    return {
      nom_questionnaire: "",
      id: "",
      code:"",
    };
  },

  methods: {
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
    go(_id) {
      const requestsend = {
        method: "POST",
        body: JSON.stringify({
          code: this.code,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/validateCode", requestsend)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          var code = prompt("Entrer le code");

          if (code == this.code) {
            ("code bon")
          }else{
            ("code incoreect");

          }
          

          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });

      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          nom_questionnaire: _id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/getRandUs", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          console.log(_id);
          this.$router.push({
            name: "Questionnaire",
            params: { _id },
          });
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  //git init
  //git remote add origin https://github.com/20delizee/success.git
  //    git pull
  //  git branch --track develop remotes/origin/develop
  //git checkout develop
  //git branch --track master remotes/origin/master
  created() {
    this.tirer();
  },
};
</script>

