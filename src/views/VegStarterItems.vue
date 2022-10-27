<template>
  <div>
    <div class="bg-image"></div>
    <div class="row">
        <div class="col-12 items-background">
            <div class="padding row q-pa-xl">
                <img src="https://i.pinimg.com/originals/be/1c/43/be1c43fc18f17bd488632a2c842185a2.jpg" class="veg-items"/>
                <div class="q-px-xl">
                    <h1 class="item-title">Veg Paneer Starter</h1>
                    <p>This is Veg Biryani Normal Which Serves 1 people</p>
                    <div class="row q-gutter-md">
                      <q-btn color="secondary">Add</q-btn>
                      <q-btn color="deep-orange" glossy>Delete</q-btn>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="col-12 items-background">
            <div class="padding row q-pa-xl">
                <img src="https://static.independent.co.uk/2021/03/09/10/vegetarian-biryani-090321.jpg?width=990&auto=webp&quality=75" class="veg-items"/>
                <div class="q-px-xl">
                    <h1 class="item-title">vegetable Biryani </h1>
                    <p>This is Veg Biryani Normal Which Serves 1 people</p>
                    <div class="row q-gutter-md">
                      <q-btn color="secondary">Add</q-btn>
                      <q-btn color="deep-orange" glossy>Delete</q-btn>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VegStarterItems'
}
</script>

<style>
.bg-image{
    background-image: url('https://woolpackleicester.com/wp-content/uploads/2016/05/chilli-paneer.jpg');
    background-size: cover;
    height: 50vh;
    border-radius: 16px;
}
.veg-items{
    border-radius: 16px;
    width: 150px;
    height: 150px;
}
.item-title{
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500;
    line-height: 1rem;
}
.items-background{
    background-color: lightgray;
}
</style>
