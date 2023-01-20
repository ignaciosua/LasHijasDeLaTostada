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
  </v-container>
</template>

<script>
import axios from 'axios';
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
      ]
    }
  },
  methods: {
    editField() {
      console.log(this.employee);
      axios.post('http://localhost:12345/updateEmployee', this.employee)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    removeReadOnly(input) {
      console.log(input)
      if (this.focusedInput === input) return;
      this.focusedInput = input;
      this.isReadOnly = false;
    }
  },
  created() {
    console.log(this.$route.params.id);
    /* axios.get(`http://localhost:12345/getEmployee/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data);
        this.employee = response.data;
      })
      .catch(error => {
        console.log(error);
      }); */
    this.employee = {
      "_id": "63c7380c87759ea59d0f7ef1",
      "nombre": "MAriano",
      "paterno": "Doe",
      "materno": "Smith",
      "area": "IT",
      "puesto": "Developer",
      "sucursal": "New York",
      "nss": "123456789",
      "rfc": "ABCD123456",
      "curp": "ABCD123456",
      "fechadenacimiento": "1990-01-01",
      "sueldodiarioss": 100.50,
      "sueldodiario": 150.50,
      "sueldoquincenal": 3000.00,
      "sueldomensual": 6000.00,
      "fechadeingreso": "2020-01-01",
      "banco": "Banco de México",
      "cuenta": "checking",
      "formadepago": "efectivo",
      "numerodecuenta": "123456789",
      "estadocivil": "soltero",
      "numerodetelefono": "555-555-5555",
      "correoelectronico": "johndoe@example.com"
    };
  },
}
</script>