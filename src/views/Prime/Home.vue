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
        <div class="p-col-3 p-offset-2">
          <Menu :model="sideItems" />
        </div>
        <div class="p-col-7">
          <h3>Member Detail</h3>

          <div class="p-grid">
            <div class="p-col">
              <p>
                <strong>Last Name:</strong> Henson
              </p>
              <p>
                <strong>First Name:</strong> Jim
              </p>
              <p>
                <strong>Middle Init:</strong> A
              </p>
              <p>
                <strong>Member SSN:</strong> 111-11-1111
              </p>
              <p>
                <strong>DOB:</strong> 01/01/2001
              </p>
              <p>
                <strong>Sex:</strong> Unknown
              </p>
              <p>
                <strong>Race:</strong> Unknown
              </p>
              <p>
                <strong>Marital Status:</strong> Unknown
              </p>
              <p>
                <strong>FMP:</strong> 01
              </p>
              <p>
                <strong>Occupation:</strong> Unknown
              </p>
            </div>
            <div class="p-col">
              <p>
                <strong>HIV Status:</strong> Negative
              </p>
              <p>
                <strong>Init. HIV +:</strong> N/A
              </p>
              <p>
                <strong>Last HIV -:</strong> Unknown
              </p>
              <p>
                <strong>Date last HIV drawn:</strong> Unknown
              </p>
              <p>
                <strong>Next Eval. Date:</strong> N/A
              </p>
              <p>
                <strong>Service Branch:</strong> Navy
              </p>
              <p>
                <strong>Duty Code:</strong> DEP-ACDU-N
              </p>
              <p>
                <strong>Status:</strong> Other
              </p>
              <p>
                <strong>Rank:</strong> Unknown
              </p>
              <p>
                <strong>Member Type:</strong> Dependent
              </p>
            </div>
          </div>
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

import Menubar from "primevue/menubar";

import Menu from "primevue/menu";
import InputText from "primevue/inputtext";
export default {
  name: "Home",
  components: {
    Menubar,
    Menu,
    InputText
  },
  data() {
    return {
      sideItems: [
        {
          label: "Member Detail"
          // icon: 'pi pi-refresh',
        },
        {
          label: "Correspondence"
          // icon: 'pi pi-times',
        },
        {
          label: "Test Summaries"
          // icon: 'pi pi-external-link',
        },
        {
          label: "Command Location"
          // icon: 'pi pi-upload',
        },
        {
          label: "Member Notes"
          // icon: 'pi pi-upload',
        }
      ],
      items: [
        {
          label: "HMS",
          to: "/prime/home",
          icon: ""
        },
        {
          label: "Access Member",
          to: "/prime/home",
          icon: ""
        },
        {
          label: "HETU",
          to: "/prime/table",
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
strong,
h3 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>