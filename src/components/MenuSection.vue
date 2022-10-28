<template>
  <div>
    <div class="menu-section q-pa-xl">
      <div class="row">
        <div class="col-12">
          <h1 class="menu-section-heading">Menu</h1>
        </div>
        <div class="col-3 row justify-center">
          <div class="menu-item-card">
            <img
              src="https://www.weddingbellcaterer.com/wp-content/uploads/2020/05/Weddingbell-Caterer-Menu-Veg-Starter.jpg"
              class="menu-item-image"
              @click="vegStarterItems()"
            />
            <h1 class="menu-card-title">Veg Starters</h1>
            <a href="" class="menu-item-link"> View All </a>
          </div>
        </div>
        <div class="col-3 row justify-center">
          <div class="menu-item-card">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
              class="menu-item-image"
              @click="vegStarterItems()"
            />
            <h1 class="menu-card-title">Non-Veg Starters</h1>
            <a href="" class="menu-item-link"> View All </a>
          </div>
        </div>
        <div class="col-3 row justify-center">
          <div class="menu-item-card">
            <img
              src="https://image.winudf.com/v2/image/Y29tLnl0b2ZmbGluZWJpcnlhbmlfc2NyZWVuXzE1XzE1MTU4ODY4MjNfMDEz/screen-15.jpg?fakeurl=1&type=.jpg"
              class="menu-item-image"
              @click="menuItems()"
            />
            <h1 class="menu-card-title">Non-Veg Biryani</h1>
            <a href="" class="menu-item-link"> View All </a>
          </div>
        </div>
        <div class="col-3 row justify-center">
          <div class="menu-item-card">
            <img
              src="https://th.bing.com/th/id/OIP.7iD-TDY26RsEwb-NQAjSkAHaE8?pid=ImgDet&rs=1"
              class="menu-item-image"
              @click="menuItems()"
            />
            <h1 class="menu-card-title">Veg Biryani</h1>
            <a href="" class="menu-item-link"> View All </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <footer-section></footer-section>
    </div>
  </div>
</template>

<script>
import FooterSection from './FooterSection.vue'
export default {
  name: 'MenuSection',
  methods: {
    menuItems () {
      this.$router.push('/menuitems')
    },
    vegStarterItems () {
      this.$router.push('/vegstarteritems')
    }
  },
  components: {
    FooterSection
  }
}
</script>

<style>
.menu-item-card {
  border-radius: 16px;
}
.menu-item-image {
  border-radius: 16px;
  width: 200px;
  height: 200px;
}
.menu-card-title {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  line-height: 1rem;
}
.menu-section-heading {
  color: #183b56;
  font-family: "Roboto";
  font-size: 28px;
  font-weight: 700;
  line-height: 1rem;
}
.menu-section {
  background-color: lightgrey;
}
</style>
