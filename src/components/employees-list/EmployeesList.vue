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
      :items="getUserList"
      :items-per-page="5"
      class="elevation-1"
      @click:row="goToEmployee"
    >
    </v-data-table>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
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
          { text: 'Fecha de nacimiento', value: 'fechadenacimiento' },
          { text: 'Sueldo diario SS', value: 'sueldodiarioss' },
          { text: 'Sueldo diario', value: 'sueldodiario' },
          { text: 'Sueldo quincenal', value: 'sueldoquincenal' },
          { text: 'Sueldo mensual', value: 'sueldomensual' },
          { text: 'Fecha de ingreso', value: 'fechadeingreso' },
          { text: 'Banco', value: 'banco' },
          { text: 'Cuenta', value: 'cuenta' },
          { text: 'Forma de pago', value: 'formadepago' },
          { text: 'Numero de cuenta', value: 'numerodecuenta' },
          { text: 'Estado civil', value: 'estadocivil' },
          { text: 'Numero de teléfono', value: 'numerodetelefono' },
          { text: 'Correo electrónico', value: 'correoelectronico' }
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
      getJSONFromExcel(employeesData) {
        console.log(employeesData);
        // this.tempUser = jsonData;
        employeesData.forEach(employee => {
          console.log(employee)
          axios.post('http://localhost:12345/createEmployee', employee)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        });
      },
      ...mapActions(['goToEmployee']),
      goToEmployee(employee){
        console.log(employee._id)
        //this.goToEmployee(employee.id)
        this.$router.push({ name: 'employeeDetails', params: { id: employee._id } })
      }
    },
    components: {
      ConvertExcelToJson,
      CreateUserForm
    },
    mounted() {
      axios.get('http://localhost:12345/getEmployees')
        .then(response => {
          console.log(response.data);
          this.tempUser = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    computed: {
      getUserList() {
        console.log('hello');
        return this.tempUser
      }
    }
  }

</script>
