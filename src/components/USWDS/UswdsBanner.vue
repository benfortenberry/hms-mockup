<template>
  <div>
    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="../../assets/img/us_flag_small.png"
                alt="U.S. flag"
              />
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">An official website of the United States government</p>
              <p
                class="usa-banner__header-action"
                @click="expanded=!expanded"
                aria-hidden="!expanded"
              >Here’s how you know</p>
            </div>
            <button class="usa-banner__button" aria-expanded="expanded" @click="expanded=!expanded">
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div class="usa-banner__content usa-accordion__content" v-if="expanded">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../../assets/img/icon-dot-gov.svg"
                role="img"
                alt="Dot gov"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site.
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../../assets/img/icon-https.svg"
                role="img"
                alt="Https"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong>The site is secure.</strong>
                  <br />The
                  <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import "uswds/dist/js/uswds.min.js";
import "uswds/dist/css/uswds.css";
export default {
  name: "UswdsBanner",
  props: {
    msg: String,
  },
  data() {
    return {
      expanded: false,
    };
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
