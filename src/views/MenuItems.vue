<template>
  <div>
    <div class="bg-image"></div>
    <div class="row">
      <div class="col-12 items-background">
        <div class="padding row q-pa-xl">
          <img
            src="https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Veg-Biryani-Recipe.jpg"
            class="veg-items"
          />
          <div class="q-px-xl">
            <h1 class="item-title">veg Biryani Normal</h1>
            <p>This is Veg Biryani Normal Which Serves 1 people</p>
            <div class="row q-gutter-md">
              <q-btn color="secondary" label="Add" @click="alert = true" />
              <q-dialog v-model="alert">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Alert</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Your item was added to cart
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn
                color="deep-orange"
                glossy
                label="Delete"
                @click="alert2 = true"
              />
              <q-dialog v-model="alert2">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Alert</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Your item was Deleted. please select another item.
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="col-12 items-background">
        <div class="padding row q-pa-xl">
          <img
            src="https://static.independent.co.uk/2021/03/09/10/vegetarian-biryani-090321.jpg?width=990&auto=webp&quality=75"
            class="veg-items"
          />
          <div class="q-px-xl">
            <h1 class="item-title">vegetable Biryani</h1>
            <p>This is Veg Biryani Normal Which Serves 1 people</p>
            <div class="row q-gutter-md">
              <q-btn color="secondary" label="Add" @click="alert1 = true" />
              <q-dialog v-model="alert1">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Alert</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Your item was added to cart
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn
                color="deep-orange"
                glossy
                label="Delete"
                @click="alert3 = true"
              />
              <q-dialog v-model="alert3">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Alert</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Your item was Deleted.
                    please select another item.
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItems',
  data () {
    return {
      alert: false,
      alert2: false,
      alert1: false,
      alert3: false
    }
  }
}
</script>

<style>
.bg-image {
  background-image: url("https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg");
  background-size: cover;
  height: 50vh;
  border-radius: 16px;
}
.veg-items {
  border-radius: 16px;
  width: 150px;
  height: 150px;
}
.item-title {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1rem;
}
.items-background {
  background-color: lightcyan;
}
</style>
