<template>
  <div class="index-container">
    <div ref="filterTray" class="filter-tray show-tray">
      <div class="filter-tray__button-container">
        <div class="filter-tray__button" @click="toggleTray">
          <span v-if="showTray" class="mdi mdi-36px mdi-chevron-left" />
          <span v-else class="mdi mdi-36px mdi-chevron-right"  />
        </div>
      </div>
    </div>
    <div class="item-list">
      <ItemCard v-for="item in itemList" :key="item.name" :item="item" @click.native="selectItem(item)"/>
    </div>
    <div class="item-details">
      <ItemDetails :item="currentlySelectedItem" />
    </div>
  </div>

</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemDetails from '@/components/ItemDetails.vue'
const itemList = require('@/assets/predecessor-items.json')

export default {
  name: 'The Jungle Camp | Predecessor Items',
  components: [
    ItemCard,
    ItemDetails
  ],
  data: () => ({
    showTray: true,
    currentlySelectedItem: null,
    itemList
  }),
  methods: {
    toggleTray () {
      this.showTray = !this.showTray
      const filterTray = this.$refs.filterTray
      if (filterTray.classList.contains('show-tray')) {
        filterTray.classList.remove('show-tray')
      } else {
        filterTray.classList.add('show-tray')
      }
    },
    selectItem (inItem) {
      this.currentlySelectedItem = inItem
    }
  }
}
</script>

<style scoped>
  .index-container {
    display: flex;
    height: 100%;
  }

  .filter-tray {
    flex: 0 0 auto;
    background-color: #151515;
    position: relative;
    width: 0px;
    transition: 0.3s width;
    box-shadow: 5px 0px 5px #0004;
  }

  .filter-tray.show-tray {
    width: 250px;
  }

  .filter-tray__button-container {
    position: absolute;
    right: 0;
    top: 50px;
    transform: translateX(100%);
  }

  .filter-tray__button {
    position: relative;
    border-radius: 0px 15px 15px 0px;
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    height: 50px;
    width: 50px;
    box-shadow: 5px 0px 5px #0004;
  }

  .filter-tray__button::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    height: 50px;
    width: 20px;
    border-bottom-left-radius: 15px;
    box-shadow: 0 25px 0 0px #151515;
    cursor: initial;
  }

  .filter-tray__button::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 0;
    height: 50px;
    width: 20px;
    border-top-left-radius: 15px;
    box-shadow: 0 -25px 0 0 #151515;
    cursor: initial;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 0px 30px;
    width: auto;
    overflow-y: scroll;
    height: 100%;
  }

  .item-details {
    flex: 0 0 auto;
    background-color: #151515;
    width: 350px;
    height: 100%;
    align-self: flex-end;
    box-shadow: -5px 0px 5px #0004;
  }
</style>
