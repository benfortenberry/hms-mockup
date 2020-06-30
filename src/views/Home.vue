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
              <a class="usa-nav__link usa-current" href="javascript:void(0)">
                <span>Access Member</span>
              </a>
            </li>
            <li class="usa-nav__primary-item is-current">
              <router-link class="usa-nav__link" href="javascript:void(0)" to="/about">HETU</router-link>
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

    <div class="grid-container margin-top-2">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-4">
          <nav aria-label="Secondary navigation">
            <ul class="usa-sidenav">
              <li class="usa-sidenav__item">
                <a href class="usa-current">Member Detail</a>
              </li>
              <li class="usa-sidenav__item">
                <a href>Correspondence</a>
              </li>
              <li class="usa-sidenav__item">
                <a href>Test Summaries</a>
              </li>
              <li class="usa-sidenav__item">
                <a href>Command Location</a>
              </li>
              <li class="usa-sidenav__item">
                <a href>Member Notes</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="tablet:grid-col-8">
          <div class="grid-row">
            <h3>Member Detail</h3>
          </div>
          <div class="grid-row">
            <div class="tablet:grid-col-6">
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
            <div class="tablet:grid-col-6">
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

        <!-- <table class="usa-table">
            <caption>Bordered table</caption>
            <thead>
              <tr>
                <th scope="col">Document title</th>
                <th scope="col">Description</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Declaration of Independence</th>
                <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
                <td>1776</td>
              </tr>
              <tr>
                <th scope="row">Bill of Rights</th>
                <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
                <td>1791</td>
              </tr>
              <tr>
                <th scope="row">Declaration of Sentiments</th>
                <td>A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.</td>
                <td>1848</td>
              </tr>
              <tr>
                <th scope="row">Emancipation Proclamation</th>
                <td>An executive order granting freedom to slaves in designated southern states.</td>
                <td>1863</td>
              </tr>
            </tbody>
          </table>
        </div>-->
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
  name: "Home",
  components: {
    UswdsBanner,
    UswdsFooter
  }
};
</script>
<style>
</style>