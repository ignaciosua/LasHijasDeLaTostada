<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Add new employee
    </v-card-title>

    <v-card-text>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="surname"
          :error-messages="surnameErrors"
          :counter="10"
          label="Surname"
          required
          @input="$v.surname.$touch()"
          @blur="$v.surname.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="secondSurname"
          :error-messages="secondSurnameErrors"
          :counter="10"
          label="Second Surname"
          required
          @input="$v.secondSurname.$touch()"
          @blur="$v.secondSurname.$touch()"
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
          v-model="position"
          :items="positions"
          :error-messages="positionErrors"
          label="Position"
          required
          @change="$v.position.$touch()"
          @blur="$v.position.$touch()"
        ></v-select>
        <v-select 
          v-model="branch"
          :items="branches"
          :error-messages="branchErrors"
          label="Branch"
          required
          @change="$v.branch.$touch()"
          @blur="$v.branch.$touch()"
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
          :return-value.sync="birthdate"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="birthdate"
              :error-messages="birthdateErrors"
              label="Birthdate"
              prepend-icon="mdi-calendar"
              required
              @input="$v.birthdate.$touch()"
              @blur="$v.birthdate.$touch()"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="birthdate"
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
          v-model="dailySalary"
          :error-messages="dailySalaryErrors"
          label="Daily Salary"
          required
          @input="$v.dailySalary.$touch()"
          @blur="$v.dailySalary.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="biweeklySalary"
          :error-messages="biweeklySalaryErrors"
          label="Biweekly Salary"
          required
          @input="$v.biweeklySalary.$touch()"
          @blur="$v.biweeklySalary.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="monthlySalary"
          :error-messages="monthlySalaryErrors"
          label="Monthly Salary"
          required
          @input="$v.monthlySalary.$touch()"
          @blur="$v.monthlySalary.$touch()"
        ></v-text-field>
        <v-menu
          ref="hireDateMenu"
          v-model="hireDateMenu"
          :close-on-content-click="false"
          :return-value.sync="hireDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="hireDate"
              :error-messages="hireDateErrors"
              label="Hire Date"
              prepend-icon="mdi-calendar"
              required
              @input="$v.hireDate.$touch()"
              @blur="$v.hireDate.$touch()"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="hireDate"
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
          v-model="bank"
          :error-messages="bankErrors"
          label="Bank"
          required
          @input="$v.bank.$touch()"
          @blur="$v.bank.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="bankAccount"
          :error-messages="bankAccountErrors"
          label="Bank Account"
          required
          @input="$v.bankAccount.$touch()"
          @blur="$v.bankAccount.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="paymentMethod"
          :error-messages="paymentMethodErrors"
          label="Payment Method"
          required
          @input="$v.paymentMethod.$touch()"
          @blur="$v.paymentMethod.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="accountNumber"
          :error-messages="accountNumberErrors"
          label="Account Number"
          required
          @input="$v.accountNumber.$touch()"
          @blur="$v.accountNumber.$touch()"
        ></v-text-field>
        <v-select 
          v-model="maritalStatus"
          :items="maritalStatuses"
          :error-messages="maritalStatusErrors"
          required
          label="Marital Status"
        ></v-select>
        <v-text-field
          v-model="phoneNumber"
          :error-messages="phoneNumberErrors"
          label="Phone Number"
          required
          @input="$v.phoneNumber.$touch()"
          @blur="$v.phoneNumber.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
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
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      surname: { required },
      secondSurname: { required },
      area: { required },
      position: { required },
      branch: { required },
      nss: { required, maxLength: maxLength(11) },
      rfc: { required, maxLength: maxLength(13) },
      curp: { required, maxLength: maxLength(18) },
      birthdate: { required },
      dailySalary: { required },
      biweeklySalary: { required },
      monthlySalary: { required },
      hireDate: { required },
      bank: { required },
      bankAccount: { required },
      paymentMethod: { required },
      accountNumber: { required },
      maritalStatus: { required },
      phoneNumber: { required },
      email: { required, email }
    },

    data: () => ({
      name: '',
      surname: '',
      secondSurname: '',
      area: '',
      position: '',
      branch: '',
      nss: '',
      rfc: '',
      curp: '',
      birthdate: '',
      dailySalary: '',
      biweeklySalary: '',
      monthlySalary: '',
      hireDate: '',
      bank: '',
      bankAccount: '',
      paymentMethod: '',
      accountNumber: '',
      maritalStatus: '',
      phoneNumber: '',
      email: '',
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
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      surnameErrors () {
        const errors = []
        if (!this.$v.surname.$dirty) return errors
        !this.$v.surname.required && errors.push('Surname is required.')
        return errors
      },
      secondSurnameErrors () {
        const errors = []
        if (!this.$v.secondSurname.$dirty) return errors
        !this.$v.secondSurname.required && errors.push('Second surname is required.')
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
        if (!this.$v.position.$dirty) return errors
        !this.$v.position.required && errors.push('Position is required.')
        return errors
      },
      branchErrors () {
        const errors = []
        if (!this.$v.branch.$dirty) return errors
        !this.$v.branch.required && errors.push('Branch is required.')
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
        if (!this.$v.birthdate.$dirty) return errors
        !this.$v.birthdate.required && errors.push('Birthdate is required.')
        return errors
      },
      dailySalaryErrors () {
        const errors = []
        if (!this.$v.dailySalary.$dirty) return errors
        !this.$v.dailySalary.required && errors.push('Daily salary is required.')
        return errors
      },
      biweeklySalaryErrors () {
        const errors = []
        if (!this.$v.biweeklySalary.$dirty) return errors
        !this.$v.biweeklySalary.required && errors.push('Biweekly salary is required.')
        return errors
      },
      monthlySalaryErrors () {
        const errors = []
        if (!this.$v.monthlySalary.$dirty) return errors
        !this.$v.monthlySalary.required && errors.push('Monthly salary is required.')
        return errors
      },
      hireDateErrors () {
        const errors = []
        if (!this.$v.hireDate.$dirty) return errors
        !this.$v.hireDate.required && errors.push('Hire date is required.')
        return errors
      },
      bankErrors () {
        const errors = []
        if (!this.$v.bank.$dirty) return errors
        !this.$v.bank.required && errors.push('Bank is required.')
        return errors
      },
      bankAccountErrors () {
        const errors = []
        if (!this.$v.bankAccount.$dirty) return errors
        !this.$v.bankAccount.required && errors.push('Bank account is required')
        return errors
      },
      paymentMethodErrors () {
        const errors = []
        if (!this.$v.paymentMethod.$dirty) return errors
        !this.$v.paymentMethod.required && errors.push('Payment method is required')
        return errors
      },
      accountNumberErrors () {
        const errors = []
        if (!this.$v.accountNumber.$dirty) return errors
        !this.$v.accountNumber.required && errors.push('Account number is required')
        return errors
      },
      maritalStatusErrors () {
        const errors = []
        if (!this.$v.maritalStatus.$dirty) return errors
        !this.$v.maritalStatus.required && errors.push('Marital status is required')
        return errors
      },
      phoneNumberErrors () {
        const errors = []
        if (!this.$v.phoneNumber.$dirty) return errors
        !this.$v.phoneNumber.required && errors.push('Phone number is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
      },
    },
  }
</script>
