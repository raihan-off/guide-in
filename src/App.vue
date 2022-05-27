<template>
  <v-app>
    <v-app-bar app class="mb-15" color="#2F3241" dark>
      <div class="d-flex align-center">
        <h3>ERCODESISTANT</h3>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-spacer></v-spacer>
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main class="mr-15">
      <router-view />
    </v-main>
    <v-footer
      class="d-flex align-center mt-15"
      color="#2F3241"
      height="200px"
      dark
    >
      <!-- <v-img src="../assets/img/logo_guide_in.png" /> -->
      <v-row class="items">
        <v-col class="item">
          <h3>Product</h3>
          <br />
          <router-link class="r-link white--text" to="/Information"><h5>Guide.in Information</h5></router-link>
          <router-link class="r-link white--text" to="/Work"><h5>Guide.in Work</h5></router-link>
        </v-col>

        <v-col class="item">
          <h3>Services</h3>
          <br />
          <h5>Bantuan</h5>
          <h5>Saran & Kritik</h5>
          <h5>Laporkan Masalah</h5></v-col
        >

        <v-col class="item">
          <h3>Social Media</h3>
          <br />
          <h5>IG : @ercodesistant</h5>
          <h5>Twitter : @Ercodesistant</h5>
          <h5>Email : Ercodesistant@gmail.com</h5></v-col
        >
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.items {
  padding-left: 40%;
}

.item h5 {
  font-weight: 100;
}

.r-link{
  text-decoration: none;
}
</style>
