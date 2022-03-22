<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
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
            <th style="width: 20%">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind="id_user" v-for="v in id_user" :key="v._id">
            <td>{{ v.id_user }}</td>
            <td>{{ v.nom }}</td>
            <td>{{ v.prenom }}</td>
            <td><button @click="supprimer(v._id)">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>