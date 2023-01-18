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
                v-for="field in informationFields"
                :key="field"
              >
                <v-text-field
                  :value="field.value"
                  :label="field.label"
                  filled
                  readonly
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
export default {
  data() {
    return {
      informationFields: {
        name: {
          value: 'John',
          label: 'Name'
        },
        surName: {
          value: 'Doe',
          label: 'Surname'
        },
        secondSurname: {
          value: 'Johnson',
          label: 'Second surname'
        },
        area: {
          value: 'Area value',
          label: 'Area'
        },
        position: {
          value: 'Position value',
          label: 'Position'
        },
        branch: {
          value: 'Branch value',
          label: 'Branch'
        },
        nss: {
          value: 'NSS value',
          label: 'NSS'
        },
        rfc: {
          value: 'RFC value',
          label: 'RFC'
        },
        curp: {
          value: 'CURP value',
          label: 'CURP'
        },
        birthdate: {
          value: 'Birthdate value',
          label: 'Birthdate'
        },
        dailySalarySs: {
          value: 'Daily salary ss value',
          label: 'Daily Salary SS'
        },
        dailySalary: {
          value: 'Daily Salary value',
          label: 'Daily Salary'
        },
        biweeklySalary: {
          value: 'BiWeekly Salary value',
          label: 'Biweekly Salary'
        },
        monthlySalary: {
          value: 'Monthly Salary value',
          label: 'Monthly Salary'
        },
        hireDate: {
          value: 'Hire Date value',
          label: 'Hire Date'
        },
        bank: {
          value: 'John',
          label: 'Bank'
        },
        banckAccount: {
          value: 'John',
          label: 'Bank Account'
        },
        paymentMethod: {
          value: 'John',
          label: 'Payment Method'
        },
        accountNumber: {
          value: 'John',
          label: 'Account Number'
        },
        maritalStatus: {
          value: 'John',
          label: 'Marital Status'
        },
        phoneNumber: {
          value: 'John',
          label: 'Phone Number'
        },
        email: {
          value: 'John',
          label: 'E-mail'
        },
      }
    }
  },
  methods: {}
}
</script>