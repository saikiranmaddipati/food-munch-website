import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    img: 'https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Veg-Biryani-Recipe.jpg',
    text1: 'Veg Biryani Normal',
    text2: 'This is Veg Biryani Normal Which Serves 1 people',
    text3: 'Veg Panner Starter',
    text4: 'This is veg panner starter which is one people',
    cartItems: [],
    cartItemCount: 0
  },
  getters: {
    headingText: state => state.text1,
    paragraphText: state => state.text2,
    headingText1: state => state.text3,
    paragraphText1: state => state.text4
  },
  mutations: {
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload)
    }
  },
  modules: {
  }
})
