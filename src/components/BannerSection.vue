<template>
  <div>
    <div class="bg-container column justify-center">
      <div class="text-center">
        <h1 class="banner-heading">Get Delicious Food Anytime</h1>
        <p class="banner-caption mb-4">Eat Smart & Healthy</p>
        <button class="custom-button">View Menu</button>
        <button class="custom-outline-button">Order Now</button>
      </div>
    </div>
    <div>
      <menu-section></menu-section>
    </div>
  </div>
</template>

<script>
import MenuSection from './MenuSection.vue'
export default {
  name: 'BannerSection',
  components: {
    MenuSection
  }
}
</script>

<style>
.bg-container {
  background-image: url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png");
  background-size: cover;
  height: 80vh;
}
.banner-heading {
  color: white;
  font-family: "Roboto";
  font-size: 45px;
  font-weight: 300;
}
.banner-caption {
  color: #f5f7fa;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 300;
}
.custom-button {
  color: white;
  background-color: #d0b200;
  width: 130px;
  height: 45px;
  border-width: 0;
  border-radius: 8px;
  margin-right: 10px;
}
.custom-outline-button {
  color: #d0b200;
  background-color: transparent;
  width: 130px;
  height: 45px;
  border-style: solid;
  border-width: 1px;
  border-color: #d0b200;
  border-radius: 8px;
}
</style>
