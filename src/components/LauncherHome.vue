<template>
  <v-container>
    <section class="mb-15">
      <v-row class="pa-0">
        <v-img
          :src="require('../assets/img/undraw_studying_re_deca.svg')"
          class="mt-15 pr-0"
          contain
          height="300"
          width="100"
        />

        <v-col>
          <h1 class="display-2 font-weight-bold mt-15">GUIDE.IN</h1>
          <p class="subheading font-weight-regular my-15">
            Selamat datang di website guide.in oleh ErCodesistant!<br />Temukan
            segala yang kamu butuhkan untuk meningkatkan<br />skill dan potensi
            kamu di dunia teknologi dan industri.
          </p>
          <v-row class="mx-5">
            <v-btn class="mr-5" color="#2F3241" target="_blank">
              <router-link class="r-link white--text" to="/Information">Information</router-link>
            </v-btn>
            <v-btn class="">
              <router-link class="r-link" to="/Work">Work</router-link>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-col>
        <h1 class="text-center my-15">Berkembang Bersama Guide.in</h1>
        <v-row class="mt-15 ml-15">
          <v-col class="mx-15">
            <v-img
              src="../assets/img/undraw_online_learning_re_qw08.svg"
              contain
              height="150"
              width="150"
            />
            <h4>Temukan website keren <br />kapan saja, dimana saja</h4>
          </v-col>
          <v-col>
            <v-img
              src="../assets/img/undraw_working_remotely_jh40.svg"
              contain
              height="150"
              width="150"
            />
            <h4>Temukan Pekerjaan<br />Freelance/Kantor</h4>
          </v-col>
          <v-col>
            <v-img
              src="../assets/img/undraw_work_chat_re_qes4.svg"
              contain
              height="150"
              width="150"
            />
            <h4>
              ErCodesistant yang selalu siap<br />menerima masukan dan kritik
            </h4></v-col
          >
        </v-row>
      </v-col>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "LauncherHome",
  data: () => ({}),
};
</script>
