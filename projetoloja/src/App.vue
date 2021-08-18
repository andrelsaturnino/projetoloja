<template>
  <v-app>
    <v-main>
      <Header :usuario="user" />

      <router-view></router-view>
      <div style="width:100%" class="footer">
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,

    Footer,
  },

  data: () => ({
    user: "",
  }),
};
</script>
