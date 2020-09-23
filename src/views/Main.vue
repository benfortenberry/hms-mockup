<template>
  <div class="main">
      <h1>HMS MOCKUPS</h1>
      <p>Below are links to the same html using the styling of 4 popular css frameworks.  <br />
      The only active links within are 'Access Member' and 'HETU'. One shows a possible member detail page and the other a table layout.</p>
  <br />
  <br />
  <a href="/uswds/home" class="gradient-text">US Web Design System</a>
  <br />
  <br />
    <a href="/bootstrap/home" class="gradient-text">Bootstrap</a>
      <br />
  <br />
   
    <a href="/prime/home" class="gradient-text">Prime</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {
  
  }
};
</script>
<style scoped>
a{
   
    color:darkgreen;
    font-size: 20px;
    
    ;
  
}
h1{
    color:#222222
}
.gradient-text {
  /* Fallback: Set a background color. */
  background-color: red;
  
  /* Create the gradient. */
  background-image: linear-gradient(45deg, #3f5efb, #fc466b);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
*{
   
  text-align: center;
   font-family:Arial, Helvetica, sans-serif;
}
</style>