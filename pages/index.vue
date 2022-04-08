<template>
  <div class="index-container">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    .
    <div class="item-card-container">
      <item-card v-for="item in itemList" :key="item.name" :item="item"></item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
const itemJSON = require('@/assets/predecessor-items.json')

export default {
  name: 'Index',
  components: [ItemCard],
  data () {
    return {
      drawer: false,
      itemList: itemJSON,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'The Jungle Camp'
    }
  }
}
</script>

<style scoped>
  .item-card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
</style>
