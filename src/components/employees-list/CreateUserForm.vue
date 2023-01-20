<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Add new employee
    </v-card-title>

    <v-card-text>
      <form>
        <v-text-field
          v-model="nombre"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.nombre.$touch()"
          @blur="$v.nombre.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="paterno"
          :error-messages="surnameErrors"
          :counter="10"
          label="Surname"
          required
          @input="$v.paterno.$touch()"
          @blur="$v.paterno.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="materno"
          :error-messages="secondSurnameErrors"
          :counter="10"
          label="Second Surname"
          required
          @input="$v.materno.$touch()"
          @blur="$v.materno.$touch()"
        ></v-text-field>
        <v-select 
          v-model="area"
          :items="areas"
          :error-messages="areaErrors"
          label="Area"
          required
          @change="$v.area.$touch()"
          @blur="$v.area.$touch()"
        ></v-select>
        <v-select 
          v-model="puesto"
          :items="positions"
          :error-messages="positionErrors"
          label="Position"
          required
          @change="$v.puesto.$touch()"
          @blur="$v.puesto.$touch()"
        ></v-select>
        <v-select 
          v-model="sucursal"
          :items="branches"
          :error-messages="branchErrors"
          label="Branch"
          required
          @change="$v.sucursal.$touch()"
          @blur="$v.sucursal.$touch()"
        ></v-select>
        <v-text-field
          v-model="nss"
          :error-messages="nssErrors"
          label="NSS"
          required
          @input="$v.nss.$touch()"
          @blur="$v.nss.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="rfc"
          :error-messages="rfcErrors"
          label="RFC"
          required
          @input="$v.rfc.$touch()"
          @blur="$v.rfc.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="curp"
          :error-messages="curpErrors"
          label="CURP"
          required
          @input="$v.curp.$touch()"
          @blur="$v.curp.$touch()"
        ></v-text-field>
        <v-menu
          ref="birthdateMenu"
          v-model="birthdateMenu"
          :close-on-content-click="false"
          :return-value.sync="fechadenacimiento"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="fechadenacimiento"
              :error-messages="birthdateErrors"
              label="Birthdate"
              prepend-icon="mdi-calendar"
              required
              @input="$v.fechadenacimiento.$touch()"
              @blur="$v.fechadenacimiento.$touch()"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="fechadenacimiento"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="birthdateMenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.birthdateMenu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field
          v-model="sueldodiario"
          :error-messages="dailySalaryErrors"
          label="Daily Salary"
          required
          @input="$v.sueldodiario.$touch()"
          @blur="$v.sueldodiario.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="sueldoquincenal"
          :error-messages="biweeklySalaryErrors"
          label="Biweekly Salary"
          required
          @input="$v.sueldoquincenal.$touch()"
          @blur="$v.sueldoquincenal.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="sueldomensual"
          :error-messages="monthlySalaryErrors"
          label="Monthly Salary"
          required
          @input="$v.sueldomensual.$touch()"
          @blur="$v.sueldomensual.$touch()"
        ></v-text-field>
        <v-menu
          ref="hireDateMenu"
          v-model="hireDateMenu"
          :close-on-content-click="false"
          :return-value.sync="fechadeingreso"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="fechadeingreso"
              :error-messages="hireDateErrors"
              label="Hire Date"
              prepend-icon="mdi-calendar"
              required
              @input="$v.fechadeingreso.$touch()"
              @blur="$v.fechadeingreso.$touch()"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="fechadeingreso"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="hireDateMenu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.hireDateMenu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field
          v-model="banco"
          :error-messages="bankErrors"
          label="Bank"
          required
          @input="$v.banco.$touch()"
          @blur="$v.banco.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="cuenta"
          :error-messages="bankAccountErrors"
          label="Bank Account"
          required
          @input="$v.cuenta.$touch()"
          @blur="$v.cuenta.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="formadepago"
          :error-messages="paymentMethodErrors"
          label="Payment Method"
          required
          @input="$v.formadepago.$touch()"
          @blur="$v.formadepago.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="numerodecuenta"
          :error-messages="accountNumberErrors"
          label="Account Number"
          required
          @input="$v.numerodecuenta.$touch()"
          @blur="$v.numerodecuenta.$touch()"
        ></v-text-field>
        <v-select 
          v-model="estadocivil"
          :items="maritalStatuses"
          :error-messages="maritalStatusErrors"
          required
          label="Marital Status"
        ></v-select>
        <v-text-field
          v-model="numerodetelefono"
          :error-messages="phoneNumberErrors"
          label="Phone Number"
          required
          @input="$v.numerodetelefono.$touch()"
          @blur="$v.numerodetelefono.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="correoelectronico"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.correoelectronico.$touch()"
          @blur="$v.correoelectronico.$touch()"
        ></v-text-field>
      </form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nombre: { required },
      paterno: { required },
      materno: { required },
      area: { required },
      puesto: { required },
      sucursal: { required },
      nss: { required, maxLength: maxLength(11) },
      rfc: { required, maxLength: maxLength(13) },
      curp: { required, maxLength: maxLength(18) },
      fechadenacimiento: { required },
      sueldodiario: { required },
      sueldoquincenal: { required },
      sueldomensual: { required },
      fechadeingreso: { required },
      banco: { required },
      cuenta: { required },
      formadepago: { required },
      numerodecuenta: { required },
      estadocivil: { required },
      numerodetelefono: { required },
      correoelectronico: { required, email }
    },

    data: () => ({
      nombre: '',
      paterno: '',
      materno: '',
      area: '',
      puesto: '',
      sucursal: '',
      nss: '',
      rfc: '',
      curp: '',
      fechadenacimiento: '',
      sueldodiario: '',
      sueldoquincenal: '',
      sueldomensual: '',
      fechadeingreso: '',
      banco: '',
      cuenta: '',
      formadepago: '',
      numerodecuenta: '',
      estadocivil: '',
      numerodetelefono: '',
      correoelectronico: '',
      areas: ['Piso', 'Cocina'],
      positions: ['Mesero', 'Cocinero'],
      branches: ['Calles 38', 'Quinta'],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      birthdateMenu: false,
      hireDateMenu: false,
      maritalStatuses: ['Married', 'Divorce']
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.nombre.$dirty) return errors
        !this.$v.nombre.required && errors.push('Name is required.')
        return errors
      },
      surnameErrors () {
        const errors = []
        if (!this.$v.paterno.$dirty) return errors
        !this.$v.paterno.required && errors.push('Surname is required.')
        return errors
      },
      secondSurnameErrors () {
        const errors = []
        if (!this.$v.materno.$dirty) return errors
        !this.$v.materno.required && errors.push('Second paterno is required.')
        return errors
      },
      areaErrors () {
        const errors = []
        if (!this.$v.area.$dirty) return errors
        !this.$v.area.required && errors.push('Area is required.')
        return errors
      },
      positionErrors () {
        const errors = []
        if (!this.$v.puesto.$dirty) return errors
        !this.$v.puesto.required && errors.push('Position is required.')
        return errors
      },
      branchErrors () {
        const errors = []
        if (!this.$v.sucursal.$dirty) return errors
        !this.$v.sucursal.required && errors.push('Branch is required.')
        return errors
      },
      nssErrors () {
        const errors = []
        if (!this.$v.nss.$dirty) return errors
        !this.$v.nss.maxLength && errors.push('NSS must 11 characters long')
        !this.$v.nss.required && errors.push('NSS is required.')
        return errors
      },
      rfcErrors () {
        const errors = []
        if (!this.$v.rfc.$dirty) return errors
        !this.$v.rfc.maxLength && errors.push('RFC must 13 characters long')
        !this.$v.rfc.required && errors.push('RFC is required.')
        return errors
      },
      curpErrors () {
        const errors = []
        if (!this.$v.curp.$dirty) return errors
        !this.$v.curp.maxLength && errors.push('CURP must 18 characters long')
        !this.$v.curp.required && errors.push('CURP is required.')
        return errors
      },
      birthdateErrors () {
        const errors = []
        if (!this.$v.fechadenacimiento.$dirty) return errors
        !this.$v.fechadenacimiento.required && errors.push('Birthdate is required.')
        return errors
      },
      dailySalaryErrors () {
        const errors = []
        if (!this.$v.sueldodiario.$dirty) return errors
        !this.$v.sueldodiario.required && errors.push('Daily salary is required.')
        return errors
      },
      biweeklySalaryErrors () {
        const errors = []
        if (!this.$v.sueldoquincenal.$dirty) return errors
        !this.$v.sueldoquincenal.required && errors.push('Biweekly salary is required.')
        return errors
      },
      monthlySalaryErrors () {
        const errors = []
        if (!this.$v.sueldomensual.$dirty) return errors
        !this.$v.sueldomensual.required && errors.push('Monthly salary is required.')
        return errors
      },
      hireDateErrors () {
        const errors = []
        if (!this.$v.fechadeingreso.$dirty) return errors
        !this.$v.fechadeingreso.required && errors.push('Hire date is required.')
        return errors
      },
      bankErrors () {
        const errors = []
        if (!this.$v.banco.$dirty) return errors
        !this.$v.banco.required && errors.push('Bank is required.')
        return errors
      },
      bankAccountErrors () {
        const errors = []
        if (!this.$v.cuenta.$dirty) return errors
        !this.$v.cuenta.required && errors.push('Bank account is required')
        return errors
      },
      paymentMethodErrors () {
        const errors = []
        if (!this.$v.formadepago.$dirty) return errors
        !this.$v.formadepago.required && errors.push('Payment method is required')
        return errors
      },
      accountNumberErrors () {
        const errors = []
        if (!this.$v.numerodecuenta.$dirty) return errors
        !this.$v.numerodecuenta.required && errors.push('Account number is required')
        return errors
      },
      maritalStatusErrors () {
        const errors = []
        if (!this.$v.estadocivil.$dirty) return errors
        !this.$v.estadocivil.required && errors.push('Marital status is required')
        return errors
      },
      phoneNumberErrors () {
        const errors = []
        if (!this.$v.numerodetelefono.$dirty) return errors
        !this.$v.numerodetelefono.required && errors.push('Phone number is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.correoelectronico.$dirty) return errors
        !this.$v.correoelectronico.email && errors.push('Must be valid e-mail')
        !this.$v.correoelectronico.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      prepareNewEmployeeInfo () {
        return {
          nombre: this.nombre,
          paterno: this.paterno,
          materno: this.materno,
          area: this.area,
          puesto: this.puesto,
          sucursal: this.sucursal,
          nss: this.nss,
          rfc: this.rfc,
          curp: this.curp,
          fechadenacimiento: this.fechadenacimiento,
          sueldodiario: this.sueldodiario,
          sueldoquincenal: this.sueldoquincenal,
          sueldomensual: this.sueldomensual,
          fechadeingreso: this.fechadeingreso,
          banco: this.banco,
          cuenta: this.cuenta,
          formadepago: this.formadepago,
          numerodecuenta: this.numerodecuenta,
          estadocivil: this.estadocivil,
          numerodetelefono: this.numerodetelefono,
          correoelectronico: this.correoelectronico
        }
      },
      submit () {
        const newEmployeeInfo = this.prepareNewEmployeeInfo();
        console.log(newEmployeeInfo);
        axios.post('http://localhost:12345/createEmployee', newEmployeeInfo)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.nombre = ''
        this.correoelectronico = ''
      },
    },
  }
</script>
