<template>
  <div id="New_questionnaire">
    <router-link to="/Correcteur"><button>Accueil</button></router-link>
    <router-view />
    <br />
    <br />
    <h1>Creation des Questions</h1>
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
        :value="v._id"
      ></option>
    </select>
    <br />
    <br />

    <h4>type de question:</h4>
    <select v-model="type_question">
      <option @click="QCU" id="QCU" value="QCU">QCU</option>
    </select>
    <br />
    <br />
    <div v-show="QCU">
      <h4>Choix 1</h4>
      <input type="radio" name="que" value="c1" v-model="c1" />
      <input type="text" v-model="n1" />
      <br />
      <br />
      <h4>Choix 2</h4>
      <input type="radio" name="que" value="c2" v-model="c2" />
      <input type="text" v-model="n2" />
      <br />
      <br />
      <h4>Choix 3</h4>
      <input type="radio" name="que" value="c3" v-model="c3" />
      <input type="text" v-model="n3" />
    </div>
    <br />
    <h2>
      <button
        @click="creer"
        class="btn btn-danger btn-lg"
        type="button"
        role="button"
        data-bss-hover-animate="pulse"
      >
        Créer la question à choix unique
      </button>
    </h2>
    
  </div>
</template>

<script>
export default {
  name: "New_questionnaire",

  data: function () {
    return {
      id_matiere: "",
      nom_questionnaire: "",
      question: "",
      type_question: "",
      passe: "false",
      question_answer: [],
      c1: "",
      c2: "",
      c3: "",
      n1: "",
      n2: "",
      n3: "",
      a1: "",
      f1: "",
      a2: "",
      f2: "",
      a3: "",
      f3: "",
      libres: "",
    };
  },
  props: {
    type_question2: String,
    questions: String,
  },
  methods: {
    QCM: function () {
      this.QCM = !this.QCM;
    },
    QCU: function () {
      this.QCU = !this.QCU;
    },
    libre: function () {
      this.libre = !this.libre;
    },
    creer() {
      if (this.n1 && this.n2 && this.n3) {
        var c1 = this.c1 ? true : false;
        this.question_answer.push({
          answer_content: this.n1,
          answer_status: c1,
        });

        this.c1 = "";
        var c2 = this.c2 ? true : false;

        this.question_answer.push({
          answer_content: this.n2,
          answer_status: c2,
        });
        this.c2 = "";

        var c3 = this.c3 ? true : false;
        this.question_answer.push({
          answer_content: this.n3,
          answer_status: c3,
        });
        this.c3 = "";

        console.log(this.question_answer);
      } else {
        alert("remplissez les champs");
      }

      const requestSend = {
        method: "POST",
        body: JSON.stringify({
          question: this.question,
          type_question: this.type_question,
          question_answer: this.question_answer,
          nom_questionnaire: this.id_matiere,
          passe: this.passe,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/success/saveQuestion", requestSend)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.question_answer = "";
      this.n1 = "";
      this.c1 = "";
      this.c2 = "";
      this.c3 = "";
      this.n2 = "";
      this.n3 = "";
      this.question = "";
      this.type_question = "";

      setTimeout(
        function () {
          window.location.reload();
        }.bind(this),
        50
      );
    },
    //yo() {
    //  if (this.f1 && this.f2 && this.f3) {
    //    var a1 = this.a1 ? true : false;
    //    this.question_answer.push({
    //      answer_content: this.f1,
    //      answer_status: a1,
    //    });
//
    //    this.a1 = "";
    //    var a2 = this.z2 ? true : false;
//
    //    this.question_answer.push({
    //      answer_content: this.f2,
    //      answer_status: a2,
    //    });
    //    this.a2 = "";
//
    //    var a3 = this.a3 ? true : false;
    //    this.question_answer.push({
    //      answer_content: this.f3,
    //      answer_status: a3,
    //    });
    //    this.f3 = "";
//
    //    console.log(this.question_answer);
    //  } else {
    //    alert("remplissez les champs");
    //  }
//
    //  const requestSend = {
    //    method: "POST",
    //    body: JSON.stringify({
    //      question: this.question,
    //      type_question: this.type_question,
    //      question_answer: this.question_answer,
    //      nom_questionnaire: this.id_matiere,
    //      passe: this.passe,
    //    }),
    //    headers: { "Content-type": "application/json; charset=UTF-8" },
    //  };
//
    //  fetch("http://localhost:3000/success/saveQuestion", requestSend)
    //    .then((response) => response.text())
    //    .then((result) => {
    //      console.log(result);
    //    })
    //    .catch((error) => {
    //      console.log("error", error);
    //    });
    //  this.question_answer = "";
    //  this.a1 = "";
    //  this.f1 = "";
    //  this.a2 = "";
    //  this.f3 = "";
    //  this.a2 = "";
    //  this.f3 = "";
    //  this.question = "";
    //  this.type_question = "";
//
    //  setTimeout(
    //    function () {
    //      window.location.reload();
    //    }.bind(this),
    //    50
    //  );
    //},

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