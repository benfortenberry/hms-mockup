<template>
  <div>
    <a href="/">mockup home</a>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/bootstrap/home">HMS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/bootstrap/home">Access Member</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/bootstrap/table">
                HETU
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Freedom of Information Act</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class>
            <div class="table-responsive">
              <table class="table table-sm table-striped table-bordered">
                <caption>HETU Appointments: Bethesda</caption>
                <thead class="thead-light">
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
                      <button class="btn btn-sm btn-primary">Evaluation Completed</button>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-sm btn-primary">Problems</button>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-sm btn-primary">Reschedule</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "Table",
  components: {},
  data() {
    return {
      patients: [
        {
          first: "Kermit",
          last: "Frog",
          middle: "A",
        },
        {
          first: "Dr.",
          last: "Teeth",
          middle: "B",
        },
        {
          first: "Swedish",
          last: "Chef",
          middle: "C",
        },
        {
          first: "Bunson",
          last: "Honeydew",
          middle: "D",
        },
        {
          first: "Sam",
          last: "Eagle",
          middle: "E",
        },
        {
          first: "Fozzy",
          last: "Bear",
          middle: "F",
        },
        {
          first: "Oscar",
          last: "Grouch",
          middle: "G",
        },
        {
          first: "Big",
          last: "Bird",
          middle: "H",
        },
        {
          first: "Miss",
          last: "Piggy",
          middle: "I",
        },
      ],
    };
  },
};
</script>
<style>
</style>