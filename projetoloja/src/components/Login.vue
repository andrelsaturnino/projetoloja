<!-- HTML  -->
<template>
  <div class="login">
    <v-form>
      <v-container fluid>
        <v-text-field label="Login" single-line></v-text-field>

        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          value=""
          class="input-group--focused"
          @click:append="show3 = !show3"
        ></v-text-field>
        Esqueci a senha !
        <!-- <v-checkbox v-model="checkbox1" :label="`Lembrar `"></v-checkbox> -->
        <div class="button">
          <v-btn class="mb-2" style="width:100%" depressed color="primary">
            Entrar
          </v-btn>
          <v-btn style="width:100%" depressed color="dark">
            Cadastrar
          </v-btn>
        </div>
        <div class="mt-3">
          ou clique com
          <v-btn @click="googleAuth" style="width:100%" depressed color="red">
            <v-icon class="mr-3">mdi-google-plus</v-icon> Google
          </v-btn>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<!-- JAVASCRIPT  -->
<script>
// import { Autenticacao } from "./services/Autenticacao.js";

export default {
  name: "HelloWorld",
  props: {
    usuario: String,
  },
  methods: {
    googleAuth() {
      let gapi = window.gapi;
      let clientId =
        "105340661796-ps3rp608occhrpkrjonncrkk84dkq8hr.apps.googleusercontent.com";
      let apiKey = "AIzaSyCUdv8qAgV3QbzuzMOHdUjMawQFDnq_JrU";
      let discoveryDocs = [
        "https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest",
      ];
      let scope = "https://www.googleapis.com/auth/userinfo.profile";
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            apiKey,
            clientId,
            discoveryDocs,
            scope,
          })
          .then(() => {
            if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
              this.googleUserProfile = gapi.auth2
                .getAuthInstance()
                .currentUser.get();
              this.loginApiCall(this.googleUserProfile);
            } else {
              gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => {
                  this.googleUserProfile = gapi.auth2
                    .getAuthInstance()
                    .currentUser.get();
                  this.loginApiCall(this.googleUserProfile);
                })
                .catch((err) => {
                  alert(`Google auth error: ${err}`);
                });
            }
          })
          .catch((err) => {
            alert(err);
          });
      });
    },
    loginApiCall(data) {
      console.log("googleUserProfile", data);
      this.$router.push("/profile");
    },
  },
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
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

.icons {
  display: flex;
  justify-content: space-around;
  width: 40%;
}

.login {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 11px;
  height: 220px;
}

.button {
  justify-content: space-between;
  width: 100%;
}
</style>
