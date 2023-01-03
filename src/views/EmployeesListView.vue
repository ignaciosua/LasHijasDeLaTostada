<template>
  <employees-list />
</template>

<script>
  import EmployeesList from '../components/employees-list/EmployeesList.vue'

  export default {
    name: 'EmployeesListView',

    components: {
      EmployeesList,
    },
  }
</script>

