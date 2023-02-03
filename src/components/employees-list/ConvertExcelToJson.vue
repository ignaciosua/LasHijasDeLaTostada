<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2">
      Upload from excel
    </v-card-title>

    <v-card-text>
      <v-file-input
        type="file"
        ref="fileInput"
        accept=".xlsx"
        v-model="excelFile"
      />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="convertExcelToJson">Upload
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as XLSX from 'xlsx';
export default {
  data() {
    return {
      excelFile: null,
    }
  },
  methods: {
    convertExcelToJson() {
      // verificar que se haya seleccionado un archivo excel
      if (!this.excelFile) {
        alert("Por favor seleccione un archivo excel");
        return;
      }

      // utilizar la librería js-xlsx para convertir el archivo excel a json
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);

        console.log(jsonData)

        const jsonDataFormatted = jsonData.map(elem => {
          elem.cuenta = String(elem.cuenta);
          elem.fechadeingreso = String(this.convertExcelDate(elem.fechadeingreso));
          elem.fechadenacimiento = String(this.convertExcelDate(elem.fechadenacimiento));
          elem.numerodecuenta = String(elem.numerodecuenta);
          elem.numerodetelefono = String(elem.numerodetelefono);
          return elem;
        });
        this.$emit('close-dialog');
        this.$emit('custom-event', jsonDataFormatted);
      };
      reader.readAsBinaryString(this.excelFile);
    },
    convertExcelDate(excelDate) {
      const date = new Date((excelDate - (25567 + 1))*86400*1000).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', });
      return date.split("/").join("-");
    }
  }
}
</script>