<template>
  <div class="home">
    <h1>Connectez vous</h1>
    <br />
    <h3>Identifiant:</h3>

    <input id="id_user" name="id_user" type="text" v-model="id_user" />
    <br />
    <br />
    <h3>Mot de passe:</h3>
    <input type="password" v-model="password" />
    <br />
    <br />
    <button
      @click="login"
      class="btn btn-danger btn-lg"
      type="button"
      role="button"
      data-bss-hover-animate="pulse"
    >
      se connecter
    </button>

    <br />
    <br />
    <router-link to="/Correcteur"><button>Correcteur</button></router-link>
    <router-view />
    <br />
    <br />
    <router-link to="/Collaborateur"
      ><button>Collaborateur</button></router-link
    >
    <br />

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">Identifiant</th>
            <th style="width: 20%">Mot de passe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Correcteur</td>
            <td>Correcteur</td>
          </tr>
          <tr>
            <td>20courtot</td>
            <td>20courtot</td>
          </tr>
          <tr>
            <td>20ettouil</td>
            <td>20ettouil</td>
          </tr>
          <tr>
            <td>20delizee</td>
            <td>20delizee</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//import {actions} from "vuex";

export default {
  name: "Home",
  data: function () {
    return {
      id_user: "",
      password: "",
      token: "",
      user_account: "",
    };
  },
  methods: {
    login() {
      const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          id_user: this.id_user,
          password: this.password,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/login", requestOpt)
        .then((response) => response.text())

        .then((result) => {
          var res = JSON.parse(result);
          console.log(res);
          if (res.user_account == "collaborateur") {
            this.$router.push("/Collaborateur");
          }
          if (res.user_account == "correcteur") {
            this.$router.push("/Correcteur");
          }
          
        })

        .catch((error) => {
          console.log("error", error);
        });
      this.id_user = "";
      this.password = "";
    },
  },
};
</script>


