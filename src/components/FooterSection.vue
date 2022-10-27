<template>
  <div class="footer-background q-pa-md">
    <div class="row">
        <div class="col-12 text-center">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
              class="food-munch-logo"
            />
            <h1 class="footer-heading">orderfood@foodmunch.com</h1>
            <p class="footer-paragraph">Near Awfin Towers, Kothaguda X roads, Hyderabad</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style>
 .footer-background{
    background-color: #0d2436;
 }
 .food-munch-logo{
    height: 50px;
    width: 50px;
 }
 .footer-heading{
    color: #959ead;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 16px;
    line-height: 1rem;
 }
 .footer-paragraph{
    color: #959ead;
    font-family: "Roboto";
    font-weight: bold;
 }
</style>
