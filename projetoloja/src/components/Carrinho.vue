<template>
  <div class="carrinho">
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>{{ item.foto }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.descricao }}</td>
            <td class="dflex">
              <v-icon color="red" @click="quantidadeMenos(item)"
                >mdi-minus</v-icon
              >{{ item.quantidade
              }}<v-icon color="green" @click="quantidadeMais(item)"
                >mdi-plus</v-icon
              >
            </td>
            <td>{{ item.valorUnitario }}</td>
            <td>{{ item.valorUnitario * item.quantidade }}</td>
            <td><v-icon color="red"> mdi-close-circle</v-icon></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  methods: {
    quantidadeMenos(item) {
      if (item.quantidade == 1) {
        return;
      }
      item.quantidade--;
    },
    quantidadeMais(item) {
      item.quantidade++;
    },
  },

  data() {
    return {
      items: [
        {
          valorTotal: "Foto",
          valorUnitario: 36.5,
          quantidade: 1,
          coluna: "Foto",
          name: "TV",
          foto: 159,
        },
        {
          valorTotal: "Foto",
          valorUnitario: "Foto",
          quantidade: "2",
          coluna: "Nome",
          name: "RADIO  ",
          foto: 159,
        },
        {
          valorTotal: "Foto",
          valorUnitario: "Foto",
          quantidade: "3",
          coluna: "Descrição",
          name: "GELADEIRA",
          foto: 159,
        },
        {
          valorTotal: "Foto",
          valorUnitario: "Foto",
          quantidade: "Foto",
          coluna: "Quantidade",
          name: "FOGAO",
          foto: 159,
        },
        {
          valorTotal: "Foto",
          valorUnitario: "Foto",
          quantidade: "Foto",
          coluna: "Valor Unitario",
          name: "PC",
          foto: 159,
        },
        {
          valorTotal: "Foto",
          valorUnitario: "Foto",
          quantidade: "Foto",
          coluna: "Valor Total",
          name: "CELUAR",
          foto: 159,
        },
      ],
    };
  },
};
</script>

<style>
.dflex {
  display: flex;
  align-items: center;
  background-color: red;
  justify-content: space-between;
}

.carrinho {
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
}
</style>
