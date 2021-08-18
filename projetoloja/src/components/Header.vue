<!-- HTML  -->
<template>
  <div>
    <div id="pai" class="menu">
      <div id="logo" style="">TOP MAG BODY LGO</div>

      <div id="icons" style="" class="icons">
        <div id="pesquisar" class="pesquisar">
          <v-text-field
            label="Pesquisar"
            solo
            :class="!mostraPesquisa ? 'hidden' : ''"
            hide-details
            placeholder="Pesquise o produto"
            :dense="true"
            width="100%"
          ></v-text-field>
        </div>
        <v-icon @click="onClick" style="margin-left:5%" size="25"
          >mdi-magnify</v-icon
        >
        <v-icon size="25">mdi-cart</v-icon>
        <v-menu offset-y :left="true" :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" size="25">mdi-account</v-icon>
          </template>
          <div>
            <v-list class="px-3" style="height:350px">
              <div>
                <Login />
              </div>
            </v-list>
          </div>
        </v-menu>
      </div>

      <!--<div class="icons">
          
          <v-icon @click="search" size="25">mdi-magnify</v-icon>
          <v-icon size="25">mdi-cart</v-icon>          
          <v-icon id="idlogin" @click="login" size="25">mdi-account</v-icon>
          <div class="font">
          Olá, {{ usuario ? usuario : "visitante"}}  faça seu login ou cadastre-se
          </div>

          
        </div> -->
    </div>
  </div>
</template>

<!-- JAVASCRIPT  -->
<script>
import Login from "./Login";
export default {
  el: "#app",
  name: "HelloWorld",
  props: {
    usuario: String,
  },
  components: {
    Login,
  },
  methods: {
    onClick() {
      this.mostraPesquisa = !this.mostraPesquisa;
    },
  },

  data() {
    return {
      name: "Roberta",
      mostraPesquisa: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.menu {
  display: flex;
  justify-content: space-between;
  background-color: #0088a3;
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid gray;
}

.pesquisar {
  display: flex;
  max-width: 100%;
  width: 40%;
}

.search-input {
  max-width: 100%;
}

.icons {
  display: flex;

  justify-content: space-around;
  width: 30%;
}

.font {
  font-size: 10px;
}

.lista {
  width: 100%;
  align-items: center;
  display: flex;
}

.hidden {
  display: none;
}
</style>
