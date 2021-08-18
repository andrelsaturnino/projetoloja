<template>
  <container class="form">
    <div>
      <v-form>
        <v-container fluid>
          <v-text-field label="Nome" single-line></v-text-field>
          <v-text-field label="Email" single-line></v-text-field>
          <v-text-field label="Assunto" single-line></v-text-field>
          <v-text-field label="Mensagem" single-line></v-text-field>

          <div>
            <v-btn style="width:100%" depressed color="primary">
              Enviar
            </v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </container>
</template>

<script>
export default {};
</script>

<style>
.form {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: brown;
  height: 100%;
}
</style>
