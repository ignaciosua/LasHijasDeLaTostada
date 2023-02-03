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

        <v-dialog v-model="showCreateFromExcel" width="500">
          <convert-excel-to-json
            @close-dialog="closeCreateFromExcelDialog"
            @custom-event="getJSONFromExcel"
          ></convert-excel-to-json>
        </v-dialog>

        <v-dialog v-model="showCreateUserForm" width="500">
          <create-user-form
            @close-dialog="closeCreateEmployeeFormDialog"
            @custom-event="getNewEmployeeFromForm"
          ></create-user-form>
        </v-dialog>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="getUserList"
      :items-per-page="20"
      class="fluid-table elevation-1"
      :loading="loading"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          color="blue"
          @click="goToEmployee(item)"
        >
          mdi-eye
        </v-icon>
        <v-icon
          small
          color="red"
          @click="deleteEmployee(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:[`item.sueldodiario`]="{ item }">
        {{ formatCurrency(item.sueldodiario) }}
      </template>
      <template v-slot:[`item.sueldodiarioss`]="{ item }">
        {{ formatCurrency(item.sueldodiarioss) }}
      </template>
      <template v-slot:[`item.sueldoquincenal`]="{ item }">
        {{ formatCurrency(item.sueldoquincenal) }}
      </template>
      <template v-slot:[`item.sueldomensual`]="{ item }">
        {{ formatCurrency(item.sueldomensual) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
.headcol {
    position:absolute; 
    width:30%; 
    left:0;
    background:#eee;   
    text-align: center !important;   
    padding-top: 10px !important;
 }
.fluid-table tr:first-child td {
   font-weight: bold;
   background:#fff !important;
}
.scrollsettings{
 margin-left: 30%;
 width:800px;
}
</style>>

<script>
  import { mapActions } from 'vuex';
  import ConvertExcelToJson from './ConvertExcelToJson.vue';
  import CreateUserForm from './CreateUserForm.vue';
  import { fetchDataFromApi, postDataToAPI } from '@/helpers/helper-functions';

  export default {
    data () {
      return {
        users: [],
        loading: true,
        selectedOption: "",
        showCreateFromExcel: false,
        showCreateUserForm: false,
        createUserOptions: ['Create User', 'Upload from excel'],
        headers: [
          {
            text: 'Nombre',
            sortable: true,
            value: 'nombre',
            class: 'text-xs-left headcol'
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
          { text: 'Correo electrónico', value: 'correoelectronico' },
          { text: 'Actions', value: 'actions' },
        ],
      }
    },
    methods: {
      async getEmployees() {
        const response = await fetchDataFromApi('http://localhost:12345/getEmployees')
        this.users = response.data;
        this.loading = false;
      },
      handleCreateUserButton(option) {
        if (option === "Upload from excel") {
         return this.showCreateFromExcel = true;
        }

        if (option === "Create User") {
          return this.showCreateUserForm = true;
        }
      },
      closeCreateFromExcelDialog() {
        this.showCreateFromExcel = false;
      },
      closeCreateEmployeeFormDialog() {
        this.showCreateUserForm = false;
      },
      getJSONFromExcel(employeesData) {
        employeesData.forEach(async (employee) => {
          this.createEmployee(employee);
        });
      },
      getNewEmployeeFromForm(employee) {
        this.createEmployee(employee);
      },
      async createEmployee(employee) {
        const response = await postDataToAPI('http://localhost:12345/createEmployee', employee);
        this.users.push(response.data);
      },
      async deleteEmployee(employee) {
        const response = await postDataToAPI(`http://localhost:12345/deleteEmployee`, {
          _id: employee._id
        });
        if (response.status === 200) {
          this.users = this.users.filter((user) => user._id !== employee._id);
        }
      },
      ...mapActions(['goToEmployee']),
      goToEmployee(employee){
        this.$router.push({ name: 'employeeDetails', params: { id: employee._id } })
      },
      formatCurrency(value) {
        return new Intl.NumberFormat('es-MX', {
          style: 'currency',
          currency: 'MXN'
        }).format(value)
      }
    },
    components: {
      ConvertExcelToJson,
      CreateUserForm
    },
    async mounted() {
      this.getEmployees();
    },
    computed: {
      getUserList() {
        return this.users
      }
    }
  }

</script>
