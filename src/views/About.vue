<template>
  <div class="home">
    <!-- <img alt="V/ue logo" src="../assets/img/us_flag_small.png" /> -->
    <UswdsBanner />

    <div class="usa-overlay"></div>
    <header class="usa-header usa-header--basic">
      <div class="usa-nav-container">
        <div class="usa-navbar">
          <div class="usa-logo" id="basic-logo">
            <em class="usa-logo__text">
              <a href="/" title="Home" aria-label="Home">HMS</a>
            </em>
          </div>
          <button class="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" class="usa-nav">
          <button class="usa-nav__close">
            <img src="../assets/img/close.svg" role="img" alt="close" />
          </button>
          <ul class="usa-nav__primary usa-accordion">
            <li class="usa-nav__primary-item">
              <router-link class="usa-nav__link" to="/">Access Member</router-link>
            </li>
            <li class="usa-nav__primary-item is-current">
              <router-link class="usa-nav__link usa-current" to="/about">HETU</router-link>
            </li>
            <li class="usa-nav__primary-item">
              <a class="usa-nav__link" href="javascript:void(0)">
                <span>Help</span>
              </a>
            </li>
            <li class="usa-nav__primary-item">
              <a class="usa-nav__link" href="javascript:void(0)">
                <span>Freedom of Information Act</span>
              </a>
            </li>
          </ul>
          <form class="usa-search usa-search--small" role="search">
            <label class="usa-sr-only" for="basic-search-field-small">Search small</label>
            <input class="usa-input" id="basic-search-field-small" type="search" name="search" />
            <button class="usa-button" type="submit">
              <span class="usa-sr-only">Search</span>
            </button>
          </form>
        </nav>
      </div>
    </header>

    <div class="padding-left-2 margin-right-2 margin-top-2">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-12">
          <div class="grid-row">
            <div class="tablet:grid-col-12 overflow">
              <table class="usa-table">
                <caption>HETU Appointments: Bethesda</caption>
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Evaluation</th>
                    <th scope="col">Service</th>
                    <th scope="col">Last</th>
                    <th scope="col">First</th>
                    <th scope="col">Middle</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">FMP</th>
                    <th scope="col">SSN</th>
                    <th scope="col">T Cells</th>
                    <th scope="col">Evaluation Completed</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Reschedule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="patient in patients">
                    <td>R</td>
                    <td>09/29/2012</td>
                    <td>Navy</td>
                    <td>{{patient.last}}</td>
                    <td>{{patient.first}}</td>
                    <td>{{patient.middle}}</td>
                    <td>02/02/2002</td>
                    <td>20</td>
                    <td>111-11-1111</td>
                    <td>Unknown</td>
                    <td class="text-center">
                      <button class="usa-button">Evaluation Completed</button>
                    </td>
                    <td class="text-center">
                      <button class="usa-button">Problems</button>
                    </td>
                    <td class="text-center">
                      <button class="usa-button">Reschedule</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UswdsFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import UswdsBanner from "@/components/UswdsBanner.vue";
import UswdsFooter from "@/components/UswdsFooter.vue";

export default {
  name: "About",
  components: {
    UswdsBanner,
    UswdsFooter
  },
  data() {
    return {
      patients: [
        {
          first: "Kermit",
          last: "Frog",
          middle: "A"
        },
        {
          first: "Dr.",
          last: "Teeth",
          middle: "B"
        },
        {
          first: "Swedish",
          last: "Chef",
          middle: "C"
        },
        {
          first: "Bunson",
          last: "Honeydew",
          middle: "D"
        },
        {
          first: "Sam",
          last: "Eagle",
          middle: "E"
        },
        {
          first: "Fozzy",
          last: "Bear",
          middle: "F"
        },
        {
          first: "Oscar",
          last: "Grouch",
          middle: "G"
        },
        {
          first: "Big",
          last: "Bird",
          middle: "H"
        },
        {
          first: "Miss",
          last: "Piggy",
          middle: "I"
        }
      ]
    };
  }
};
</script>
<style>
table {
  width: 100%;
}
.usa-table td {
  padding: 0.2rem;
}
.overflow {
  overflow-x: scroll;
}
</style>