<template>
  <div id="Correction">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <br />
    <br />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">ID</th>
            <th style="width: 20%">Nom</th>
            <th style="width: 20%">Prenom</th>
            <th style="width: 20%">Corriger</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind="id_user" v-for="v in id_user" :key="v._id">
            <td>{{ v.id_user }}</td>
            <td>{{ v.nom }}</td>
            <td>{{ v.prenom }}</td>
            <td><button @click="corriger(v._id)">Corriger</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Correction",

  data: function () {
    return {
      id_user: "",
      question: "",
      id:""
    };
  },

  methods: {
    tirer() {
      const requestOpt = { method: "GET", redirect: "follow" };
      fetch("http://localhost:3000/success/getUser", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.id_user = JSON.parse(result);
          this.nom = JSON.parse(result);
          this.prenom = JSON.parse(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    corriger(_id) {
      const requestsend = {
        method: "POST",
        body: JSON.stringify({
          id_user: _id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/Answerfind", requestsend)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          console.log(_id);
          this.$router.push({
            name: "Correction_user",
            params: { _id },
          });            
          console.log(result)

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