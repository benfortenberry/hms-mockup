<template>
  <div>
    <a href="/">mockup home</a>
    <div class="container">
      <div class="p-grid">
        <div class="p-col-8 p-offset-2">
          <Menubar :model="items">
            <template #end>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" placeholder="Search" />
              </span>
            </template>
          </Menubar>
        </div>
      </div>
      <div class="p-grid">
        <div class="p-col-12">
          <DataTable :value="patients">
            <Column header="Type" field="type"></Column>
            <Column header="Evaluation" field="evaluation"></Column>
            <Column header="Service" field="service"></Column>

            <Column field="first" header="First"></Column>
            <Column field="last" header="Last"></Column>
            <Column field="middle" header="Middle"></Column>
            <Column header="FMP" field="fmp"></Column>
            <Column header="SSN" field="ssn"></Column>
            <Column header="T Cells" field="tcells"></Column>
            <Column header="Evaluation Completed">
              <template #body="slotProps">
                <Button
                  label="Evaluation Completed"
                  class="p-button-sm p-button-default"
                  @click="editProduct(slotProps.data)"
                />
              </template>
            </Column>
            <Column header="Problems">
              <template #body="slotProps">
                <Button
                  label="Problems"
                  class="p-button-sm p-button-default"
                  @click="confirmDeleteProduct(slotProps.data)"
                />
              </template>
            </Column>
            <Column header="Reschdule">
              <template #body="slotProps">
                <Button
                  label="Reschedule"
                  class="p-button-sm p-button-detault"
                  @click="confirmDeleteProduct(slotProps.data)"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Button from "primevue/button";

import Menubar from "primevue/menubar";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Menu from "primevue/menu";
import InputText from "primevue/inputtext";
export default {
  name: "Table",
  components: {
    Menubar,
    Menu,
    InputText,
    Column,
    Button,
    DataTable
  },
  data() {
    return {
      patients: [
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Kermit",
          last: "Frog",
          middle: "A"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Dr.",
          last: "Teeth",
          middle: "B"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Swedish",
          last: "Chef",
          middle: "C"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Bunson",
          last: "Honeydew",
          middle: "D"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Sam",
          last: "Eagle",
          middle: "E"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Fozzy",
          last: "Bear",
          middle: "F"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Oscar",
          last: "Grouch",
          middle: "G"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Big",
          last: "Bird",
          middle: "H"
        },
        {
          type: "R",
          evaluation: "09/29/2012",
          service: "Navy",
          fmp: "20",
          ssn: "111-11-1111",
          tcells: "Uknown",
          first: "Miss",
          last: "Piggy",
          middle: "I"
        }
      ],
      items: [
        {
          label: "HMS",
          to: "#/prime/home",
          icon: ""
        },
        {
          label: "Access Member",
          to: "#/prime/home",
          icon: ""
        },
        {
          label: "HETU",
          icon: ""
        },
        {
          label: "Help",
          icon: ""
        },
        {
          label: "Freedom of Information Act",
          icon: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
p,
a,
strong,
h3 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>