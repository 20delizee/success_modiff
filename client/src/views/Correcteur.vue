<template>
  <div id="Correcteur">
    <nav-bar />
    <router-link to="/"><button>Accueil</button></router-link>
    <br />
    <h1>Espace Correcteur</h1>
    <router-link to="/New_questions"
      ><br />
      
      <button>Créer des questions</button></router-link
    >
    <br />
    <br />
    <router-link to="/New_matiere"
      ><button>Créer des questionnaires</button></router-link
    >

    <router-link to="/New_user"
      ><button>Créer des utilisateurs</button></router-link
    >

    <router-link to="/User_list"
      ><button>Liste des utilisateurs</button></router-link
    >

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <h1>Espace Correcteur</h1>
    <br />
    
    <br />
    <h2>Correction:</h2>
    
    
    <router-link to="/Correction"><button>Correction</button></router-link>
    <router-view /><br/><br/>
    <router-link to="/List_suggest"
      ><button>Liste des suggestions</button></router-link
    ><br/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Collaborateur",
  components: { NavBar },
  data: function () {
    return {
      nom_questionnaire:"",
    };
  },
  //created(){
  //  this.tirer()
  //},
  //  methods: {
  //  tirer() {
  //    const requestOpt =  {
  //      method: "POST",
  //      body: JSON.stringify({
  //        nom_questionnaire: this.nom_questionnaire,
  //      }),
  //      headers: { "Content-type": "application/json; charset=UTF-8" },
  //    };
  //    fetch("http://http://10.0.52.15/:3000/success/find", requestOpt)
  //      .then((response) => response.text())
  //      // Sucess
  //      .then((result) => {          
  //
  //        this.nom_questionnaire = result
  //      })
  //      .catch((error) => {
  //        console.log("error", error);
  //      });
  //  },
  //},
};
</script>

