<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 740px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-white">
        <q-toolbar>
          <q-toolbar-title>
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" class="food-munch-logo"/>
          </q-toolbar-title>
          <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" class="bg-black"/>
        </q-toolbar>
      </q-header>

      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
            <banner-section></banner-section>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import BannerSection from './BannerSection.vue'
const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  }
]
export default {
  name: 'HeaderComponent',
  data () {
    return {
      drawerRight: false,
      menuList
    }
  },
  components: {
    BannerSection
  }
}
</script>

<style>
.food-munch-logo {
  width: 80px;
  height: 70px;
}
</style>
