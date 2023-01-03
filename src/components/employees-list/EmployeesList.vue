<template>
  <v-container>
    <h1>Employees</h1>

    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
  const tempUser = [{
    nombre: 'Roberto',
    paterno: 'Vallin',
    materno: 'Ramos',
    area: 'Cocina',
    puesto: 'Cocinero',
    sucursal: 'Calle 38',
    nss: '123456789',
    rfc: '123456789',
    curp: '13456789',
    fechaDeNacimiento: '07-feb-96',
    sueldoDiarioSs: '266.66',
    sueldoDiario: '266.67',
    sueldoQuincenal: '4000',
    sueldoMensual: '8000',
    fechaDeIngreso: '29-marz-21',
    banco: 'Santander',
    cuenta: '123456789',
    formaDePago: 'Santander',
    numeroDeCuenta: '123456789',
    estadoCivil: 'Soltero',
    numeroDeTelefono: '13456789',
    correoElectronico: 'roberto@hotmail.com',
  }, {
    nombre: 'Nacho',
    paterno: 'Suarez',
    materno: 'Ramos',
    area: 'Cocina',
    puesto: 'Cocinero',
    sucursal: 'Calle 38',
    nss: '123456789',
    rfc: '123456789',
    curp: '13456789',
    fechaDeNacimiento: '07-feb-96',
    sueldoDiarioSs: '266.66',
    sueldoDiario: '266.67',
    sueldoQuincenal: '4000',
    sueldoMensual: '8000',
    fechaDeIngreso: '29-marz-21',
    banco: 'Santander',
    cuenta: '123456789',
    formaDePago: 'Santander',
    numeroDeCuenta: '123456789',
    estadoCivil: 'Soltero',
    numeroDeTelefono: '13456789',
    correoElectronico: 'roberto@hotmail.com',
  }, {
    nombre: 'Christian',
    paterno: 'Pesqueira',
    materno: 'Ramos',
    area: 'Cocina',
    puesto: 'Cocinero',
    sucursal: 'Calle 38',
    nss: '123456789',
    rfc: '123456789',
    curp: '13456789',
    fechaDeNacimiento: '07-feb-96',
    sueldoDiarioSs: '266.66',
    sueldoDiario: '266.67',
    sueldoQuincenal: '4000',
    sueldoMensual: '8000',
    fechaDeIngreso: '29-marz-21',
    banco: 'Santander',
    cuenta: '123456789',
    formaDePago: 'Santander',
    numeroDeCuenta: '123456789',
    estadoCivil: 'Soltero',
    numeroDeTelefono: '13456789',
    correoElectronico: 'roberto@hotmail.com',
  }]

  export default {
    data () {
      return {
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
          { text: 'Fecha de nacimiento', value: 'fechaDeNacimiento' },
          { text: 'Sueldo diario SS', value: 'sueldoDiarioSs' },
          { text: 'Sueldo diario', value: 'sueldoDiario' },
          { text: 'Sueldo quincenal', value: 'sueldoQuincenal' },
          { text: 'Sueldo mensual', value: 'sueldoMensual' },
          { text: 'Fecha de ingreso', value: 'fechaDeIngreso' },
          { text: 'Banco', value: 'banco' },
          { text: 'Cuenta', value: 'cuenta' },
          { text: 'Forma de pago', value: 'formaDePago' },
          { text: 'Numero de cuenta', value: 'numeroDeCuenta' },
          { text: 'Estado civil', value: 'estadoCivil' },
          { text: 'Numero de teléfono', value: 'numeroDeTelefono' },
          { text: 'Correo electrónico', value: 'correoElectronico' }
        ],
        users: tempUser
      }
    },
  }
</script>
