<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Top Mag Body</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        path: "/CardProduto",
      },
      {
        name: "Serviços",
        path: "/Servicos",
      },
      {
        name: "Contato",
        path: "/Contato",
      },
    ],
  }),
};
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
