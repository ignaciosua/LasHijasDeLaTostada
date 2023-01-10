<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <h1>Employees</h1>
      </v-col>
      <v-col
        md="2"
        class="ml-auto"
      >
        <v-select 
          v-model="selectedOption"
          @change="handleCreateUserButton(selectedOption)"
          :items="createUserOptions"
          label="Add users"
          dense
          outlined
        ></v-select>

        <v-dialog v-model="dialogOpen" width="500">
          <convert-excel-to-json
            @close-dialog="closeDialog"
            @custom-event="getJSONFromExcel"
          ></convert-excel-to-json>
        </v-dialog>

        <v-dialog v-model="showCreateUserForm" width="500">
          <create-user-form></create-user-form>
        </v-dialog>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
  import ConvertExcelToJson from './ConvertExcelToJson.vue';
  import CreateUserForm from './CreateUserForm.vue';
  export default {
    data () {
      return {
        tempUser: [],
        selectedOption: "",
        dialogOpen: false,
        showCreateUserForm: false,
        createUserOptions: ['Create User', 'Upload from excel'],
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: true,
            value: 'nombre',
          },
          { text: 'Paterno', value: 'paterno', sortable: true, },
          { text: 'Materno', value: 'materno', sortable: true, },
          { text: 'Area', value: 'area' },
          { text: 'Puesto', value: 'puesto' },
          { text: 'Sucursal', value: 'sucursal' },
          { text: 'NSS', value: 'nss' },
          { text: 'RFC', value: 'rfc' },
          { text: 'CURP', value: 'curp' },
          { text: 'Fecha de nacimiento', value: 'fechaDeNacimiento' },
          { text: 'Sueldo diario SS', value: 'sueldoDiarioSs' },
          { text: 'Sueldo diario', value: 'sueldoDiario' },
          { text: 'Sueldo quincenal', value: 'sueldoQuincenal' },
          { text: 'Sueldo mensual', value: 'sueldoMensual' },
          { text: 'Fecha de ingreso', value: 'fechaDeIngreso' },
          { text: 'Banco', value: 'banco' },
          { text: 'Cuenta', value: 'cuenta' },
          { text: 'Forma de pago', value: 'formaDePago' },
          { text: 'Numero de cuenta', value: 'numeroDeCuenta' },
          { text: 'Estado civil', value: 'estadoCivil' },
          { text: 'Numero de teléfono', value: 'numeroDeTelefono' },
          { text: 'Correo electrónico', value: 'correoElectronico' }
        ],
        users: this.tempUser
      }
    },
    methods: {
      handleCreateUserButton(option) {
        if (option === "Upload from excel") {
         return this.dialogOpen = true;
        }

        if (option === "Create User") {
          return this.showCreateUserForm = true;
        }
      },
      closeDialog() {
        this.dialogOpen = false;
      },
      getJSONFromExcel(jsonData) {
        console.log(jsonData)
        this.tempUser = jsonData;
      }
    },
    components: {
      ConvertExcelToJson,
      CreateUserForm
    }
  }

</script>
