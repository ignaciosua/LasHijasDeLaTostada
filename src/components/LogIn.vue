<template>
  <v-container>
    <v-alert
      v-if="showAlert"
      border="top"
      color="red"
      dark
      dismissible
    >
      Wrong username or password
    </v-alert>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
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
 import { postDataToAPI } from '@/helpers/helper-functions';

  export default {
    data: () => ({
      show: false,
      valid: false,
      loading: false,
      showAlert: false,
      username: '',
      usernameRules: [
        v => !!v || 'E-mail is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }),

    methods: {
      async validate () {
        this.$refs.form.validate()
        if (this.valid) {
          this.loading = true;
          const response = await postDataToAPI('http://localhost:12345/login', { 'username': this.username, 'password': this.password})
          if (response?.status === 200) {
            this.loading = false;
            return this.$router.push({
              path: '/employees-list',
              name: 'employees',
              component: () => import(/* webpackChunkName: "about" */ '../views/EmployeesListView.vue')
            });
          }
          this.loading = false;
          this.showAlert = true;
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>