<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="password"
        :rules="passwordRules"
        :type="show ? 'text' : 'password'"
        label="Password"
        @click:append="show = !show"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Enter
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
 import axios from  'axios'
  export default {
    data: () => ({
      show: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        if (this.valid) {
          axios.post('http://localhost:12345/login', { 'username': this.email, 'password': this.password})
          .then(response => {
            axios.defaults.headers.common['Authorization'] = `Basic ${response.data}`;
            localStorage.setItem('auth', response.data)
            // document.cookie =  response.data
          })
          .catch(error => {
            console.log(error);
          });
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>