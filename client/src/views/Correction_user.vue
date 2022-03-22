<template>
  <div id="Correction_user">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 10%">id_user</th>
            <th style="width: 10%">question</th>
            <th style="width: 10%">answer_content</th>
            <th style="width: 10%">Bonne reponse</th>
            <th style="width: 10%">Mauvaise reponse</th>
            <th style="width: 10%">Corriger</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-bind="id_user" v-for="v in id_user" :key="v._id">
            <td>{{ v.id_user }}</td>
            <td>{{ v.question }}</td>
            <td>{{ v.answer_content }}</td>
            <td><input type="radio" :value="1" :name="question" v-model="bonne_reponse"/></td>
            <td><input type="radio" :value="0" :name="question" v-model="mauvaise_reponse"/></td>

            <td><button @click="valider(v._id)">valider</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id_user: "",
      answer_content: "",
      question: "",
      mauvaise_reponse:"0",
      bonne_reponse:"1"
    };
  },
  created() {
    this.valider();
    this.id = this.$route.params._id;
    console.log(this.id);
  },

  methods: {
    valider() {
      const requestsend = {
        method: "POST",
        body: JSON.stringify({
          id_user: this.id,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/Answerfind", requestsend)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
          this.id_user = JSON.parse(result);
          this.answer_content = JSON.parse(result);
          this.question = JSON.parse(result);
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });


        const requestOpt = {
        method: "POST",
        body: JSON.stringify({
          question: this.question,
          bonne_reponse: this.bonne_reponse,
          mauvaise_reponse:this.mauvaise_reponse
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };
      fetch("http://localhost:3000/success/Savenote", requestOpt)
        .then((response) => response.text())
        // Sucess
        .then((result) => {
       
          console.log(result);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>