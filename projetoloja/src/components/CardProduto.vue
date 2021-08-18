<template>
  <div class="d-flex">
    <v-card
      v-for="(produto, id) in produtos"
      :key="id"
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="produto.src"></v-img>

      <v-card-title>{{ produto.nome }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          {{
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)
          }}
        </div>

        <div>
          {{ produto.descricao }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Comprar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    produtos: [
      {
        id: 1,
        nome: "Magnetizador",
        preco: 200.5,
        descricao: "blablablabla",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        id: 2,
        nome: "Magnetizador 1",
        preco: 400.5,
        descricao: "cracracra",
        src:
          "https://http2.mlstatic.com/D_NQ_NP_810144-MLB29551922365_032019-O.webp",
      },
      {
        id: 3,
        nome: "Magnetizador 3",
        preco: 600.5,
        descricao: "tratratra",
        src:
          "https://http2.mlstatic.com/D_NQ_NP_730890-MLB27912597556_082018-O.webp",
      },
    ],
  }),

  methods: {},
};
</script>

<style></style>
