<template>
  <div>
    <div class="bg-image"></div>
    <header class="text-center">{{cart.length}} in cart <button @click="goToCart()">View Cart</button>
    </header>
    <div class="row">
      <div class="col-12 items-background">
        <div class="padding row q-pa-xl" v-for="(item,index) in items" :key="index">
          <img
            src="https://i.pinimg.com/originals/be/1c/43/be1c43fc18f17bd488632a2c842185a2.jpg"
            class="veg-items"
          />
          <div class="q-px-xl">
            <h1 class="item-title">{{item.title}}</h1>
            <p>{{item.paragraph}}</p>
            <div class="row q-gutter-md">
              <q-btn color="secondary" label="Add" @click="alert = true; addToCart(item)" />
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
      <hr />
    </div>
    <div>
      <cart-page :cart="cart"/>
    </div>
  </div>
</template>

<script>
import CartPage from './CartPage.vue'
export default {
  name: 'MenuItems',
  data () {
    return {
      page: 'cart',
      alert: false,
      alert2: false,
      alert1: false,
      alert3: false,
      items: [
        {
          title: 'Veg Biryani Normal',
          paragraph: 'This is Veg Biryani Normal Which Serves 1 people'
        },
        {
          title: 'Veg starter',
          paragraph: 'This is Veg starter Which Serves 1 people'
        }
      ],
      cart: []
    }
  },
  components: {
    CartPage
  },
  methods: {
    addToCart (product) {
      this.cart.push(product)
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    text () {
      return this.$store.getters.headingText
    },
    paragraph () {
      return this.$store.getters.paragraphText
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
