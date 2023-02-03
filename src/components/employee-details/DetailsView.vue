<template v-slot:extension>
  <v-container>
    <v-card>
      <v-form
        ref="form"
        @submit.prevent="submit"
      >
        <v-container>
          <v-card-title>
            Personal Information
          </v-card-title>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                v-for="field, index in informationFields"
                :key="index"
              >
                <v-text-field
                  :label="field.label"
                  @blur="() => editField(employee[field.name])"
                  @keydown.enter="editField(employee[field.name])"
                  v-model="employee[field.name]"
                  v-on:focus="removeReadOnly(field.name)" 
                  filled
                  :readonly="isReadOnly"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-form>
    </v-card>
    <v-overlay
      :opacity="0.5"
      :value="loading"
    >
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { fetchDataFromApi, postDataToAPI } from '@/helpers/helper-functions';

export default {
  data() {
    return {
      employee: {},
      isReadOnly: true,
      focusedInput: '',
      informationFields: [
        { label: 'Name', name: 'nombre' },
        { label: 'Surname', name: 'paterno' },
        { label: 'Second surname', name: 'materno' },
        { label: 'Area', name: 'area' },
        { label: 'Position', name: 'puesto' },
        { label: 'Branch', name: 'sucursal' },
        { label: 'NSS', name: 'nss' },
        { label: 'RFC', name: 'rfc' },
        { label: 'CURP', name: 'curp' },
        { label: 'Birthdate', name: 'fechadenacimiento' },
        { label: 'Daily Salary SS', name: 'sueldodiarioss' },
        { label: 'Daily Salary', name: 'sueldodiario' },
        { label: 'Biweekly Salary', name: 'sueldoquincenal' },
        { label: 'Monthly Salary', name: 'sueldomensual' },
        { label: 'Hire Date', name: 'fechadeingreso' },
        { label: 'Bank', name: 'banco' },
        { label: 'Bank Account', name: 'cuenta' },
        { label: 'Payment Method', name: 'formadepago' },
        { label: 'Account Number', name: 'numerodecuenta' },
        { label: 'Marital Status', name: 'estadocivil' },
        { label: 'Phone Number', name: 'numerodetelefono' },
        { label: 'E-mail', name: 'correoelectronico' }
      ],
      loading: true
    }
  },
  methods: {
    async getEmployee() {
      const response = await fetchDataFromApi(`http://localhost:12345/getEmployee/${this.$route.params.id}`);
      this.loading = false;
      this.employee = response.data;
    },
    async editField() {
      await postDataToAPI('http://localhost:12345/updateEmployee', this.employee);
    },
    removeReadOnly(input) {
      console.log(input)
      if (this.focusedInput === input) return;
      this.focusedInput = input;
      this.isReadOnly = false;
    }
  },
  created() {
    this.getEmployee();
  },
}
</script>