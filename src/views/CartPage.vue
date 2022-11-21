<template>
  <div class="bg-container1">
    <h1 class="heading">Cart Page</h1>
    <p class="paragraph">Your cart items are</p>
    <div v-for="(item,index) in cart" :key="index">
      <p>1.{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  props: ['cart']
}
</script>

<style scoped>
.bg-container1{
    background-color: lightgray;
    height: 100vh;
}
.heading{
    font-family: "Roboto";
    font-size: 30px;
    font-weight: 500;
    text-align: center;
}
.paragraph{
    font-family: "Roboto";
    font-size: 30px;
    padding-left: 40px;
}
</style>
