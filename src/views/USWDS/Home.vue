<template>
  <div class="home">
    <a href="/">mockup home</a>
    <UswdsBanner />

    <div class="usa-overlay"></div>
    <header class="usa-header usa-header--basic">
      <div class="usa-nav-container">
        <div class="usa-navbar">
          <div class="usa-logo" id="basic-logo">
            <em class="usa-logo__text">
              <a href="/uswds/home" title="Home" aria-label="Home">HMS</a>
            </em>
          </div>
          <button class="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" class="usa-nav">
          <button class="usa-nav__close">
            <img src="../../assets/img/close.svg" role="img" alt="close" />
          </button>
          <ul class="usa-nav__primary usa-accordion">
            <li class="usa-nav__primary-item">
              <a class="usa-nav__link usa-current" href="javascript:void(0)">
                <span>Access Member</span>
              </a>
            </li>
            <li class="usa-nav__primary-item is-current">
              <router-link class="usa-nav__link" href="javascript:void(0)" to="/uswds/table">HETU</router-link>
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
      </div>
    </div>
    <!-- 
    <UswdsFooter />-->
  </div>
</template>

<script>
// @ is an alias to /src
import UswdsBanner from "@/components/USWDS/UswdsBanner.vue";
import UswdsFooter from "@/components/USWDS/UswdsFooter.vue";

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