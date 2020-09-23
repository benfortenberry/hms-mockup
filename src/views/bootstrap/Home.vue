<template>
  <div>
    <a href="/">mockup home</a>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">HMS</a>
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
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Access Member
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/bootstrap/table">HETU</a>
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
      <div class="row mt-3">
        <div class="col-3">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >Member Detail</a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >Correspondence</a>
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >Test Summaries</a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >Command Location</a>
            <a
              class="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >Member Notes</a>
          </div>
        </div>

        <div class="col-9">
          <div class="row">
            <h3>Member Detail</h3>
          </div>
          <div class="row">
            <div class="col-6">
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
            <div class="col-6">
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

import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "Home",
  components: {}
};
</script>
<style>
</style>