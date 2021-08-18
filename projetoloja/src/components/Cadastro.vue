<!-- HTML  -->
<template>
  <div >
     <v-form>
    <v-container fluid>
       <v-text-field
            label="Primeiro Nome"
            single-line
          ></v-text-field>
       <v-text-field
            label="Ultimo Nome"
            single-line
          ></v-text-field>
          <v-text-field
            label="Email"
            single-line
          ></v-text-field>
       
          <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Senha"
            v-model="senha"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
          
          
   <div >
   <v-btn
   style= width:100%
      depressed
      color="primary"
    >
      Cadastrar
    </v-btn></div>
       
       
      
    </v-container>
  </v-form>
  </div>
</template>

<!-- JAVASCRIPT  -->
<script>
export default {
  name: "HelloWorld",
  props: {
    usuario: String,
  },
  methods: {},
  data() {
    return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        senha: "",     
        checkbox1: true,
      
      
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
  width: 40%;
  font-size: 11px;
}

.button {
    
    width: 100%;
    background-color: red;
}
</style>
