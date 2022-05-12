<template>
  <div class="information">
    <v-row class="cards d-flex flex-wrap mt-15 ml-15">
      <v-card>
        <v-img
          class="card align-center"
          src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-970-80.jpg.webp"
          height="150px"
          width="300px"
        >
          <v-card-title class="white--text">
            <router-link class="r-link white--text" to="/Pemrograman">Pemrograman</router-link>
          </v-card-title>
        </v-img>
      </v-card>
      <v-card>
        <v-img
          class="card align-center"
          src="https://cdn.mos.cms.futurecdn.net/fxBBxdZfSuyngvcNKpPSsU-320-80.jpg"
          height="150px"
          width="300px"
        >
          <v-card-title class="white--text">
            <router-link class="r-link white--text" to="/Desain">Desain</router-link>
          </v-card-title>
        </v-img>
      </v-card>
      <v-card>
        <v-img
          class="card align-center"
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          height="150px"
          width="300px"
        >
          <v-card-title class="white--text">
            <router-link class="r-link white--text" to="/Musik">Musik</router-link>
          </v-card-title>
        </v-img>
      </v-card>
    </v-row>
  </div>
</template>

<style scoped>
.card{
  margin: 30px;
  filter: brightness(80%);
}
.information{
  margin-left: 5%;
}
</style>