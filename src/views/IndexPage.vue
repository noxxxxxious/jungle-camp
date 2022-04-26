<template>
  <div class="index-container">
    <FilterTray @onfilterchange="changeFilter" />
    <div class="mobile-grouping">
      <div class="item-list">
        <ItemCard v-for="item in filteredItemList" :key="item.name" :item="item" @click="selectItem(item)"/>
        <div class="no-items-found" v-if="filteredItemList.length <= 0">No items found...</div>
      </div>
      <div :class="thirdPanelContainerClasses">
        <div v-if="currentView === 'itemDescriptions'" :class="itemDetailsClasses">
          <ItemDetails ref="itemDetails" :item="currentlySelectedItem" @closeDetails="showDetails = false"/>
          <div class="mobile-close-arrow-button" @click="closeDetails">
            <span class="mdi mdi-48px mdi-chevron-down" />
          </div>
        </div>
        <div v-else-if="currentView === 'deckBuilder'">
          <DeckBuilder />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterTray from '@/components/FilterTray.vue'
import ItemCard from '@/components/ItemCard.vue'
import ItemDetails from '@/components/ItemDescriptions/ItemDetails.vue'
import DeckBuilder from '@/components/DeckBuilder/DeckBuilder.vue'
const itemList = require('@/assets/predecessor-items.json')

export default {
  name: 'IndexPage',
  components: {
    FilterTray,
    ItemCard,
    ItemDetails,
    DeckBuilder
  },

  data: () => ({
    showDetails: false, //For mobile
    filteredItemList: [...itemList],
    filteredTags: []
  }),

  methods: {
    selectItem (inItem) {
      this.$store.dispatch('setCurrentlySelectedItem', inItem)
      if(this.showDetails === false) {
        this.showDetails = true
      }
    },    

    changeFilter (elementId, inTag) {
      const checkbox = document.getElementById(elementId)
      if (checkbox.checked && !this.filteredTags.includes(inTag)) {
        this.filteredTags.push(inTag)
      } else if (!checkbox.checked && this.filteredTags.includes(inTag)) {
        this.filteredTags = this.filteredTags.filter((tag) => {
          return tag !== inTag
        })
      }

      this.updateFilter()
    },

    updateFilter () {
      let filteredItemList = []

      if (this.filteredTags.length === 0) {
        filteredItemList = [...this.itemList]
      } else {
        filteredItemList = this.itemList.filter((item) => {
          let returnValue = true
          this.filteredTags.forEach((tag) => {
            if (!item.tags.includes(tag)) {
              returnValue = false
            }
          })
          return returnValue
        })
      }
      this.filteredItemList = filteredItemList
    },

    resetFilters () {
      document.querySelectorAll('.filter-checkbox').forEach((checkbox) => {
        checkbox.checked = false
      })
      this.filteredTags = []
      this.updateFilter()
    },

    closeDetails () {
      this.showDetails = false
      this.$store.dispatch('setCurrentlySelectedItem', null)
    }
  },

  computed: {
    itemList() {
      return this.$store.getters.getItemList
    },

    currentlySelectedItem() {
      return this.$store.getters.getCurrentlySelectedItem
    },

    itemDetailsClasses() {
      const classes = ['item-details']
      if (this.showDetails) {
        classes.push('show-item-details')
      }
      return classes.join(' ')
    },

    thirdPanelContainerClasses() {
      const classes = ['third-panel-container']
      if (this.currentView === 'deckBuilder') {
        classes.push('deck-builder')
      }
      return classes.join(' ')
    },

    currentView() {
      return this.$store.getters.getCurrentView
    }
  }
}
</script>

<style scoped>
  .index-container {
    display: flex;
    height: 100%;
    position: relative;
  }

  .mobile-grouping {
    display: contents;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 0px 30px;
    width: auto;
    overflow-y: scroll;
    height: 100%;
    justify-content: space-around;
  }

  .no-items-found {
    justify-self: center;
    align-self: center;
  }

  .third-panel-container::-webkit-scrollbar,
  .item-list::-webkit-scrollbar {
    width: 12px;
  }

  .third-panel-container::-webkit-scrollbar-track,
  .item-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    border-radius: 10px;
  }

  .third-panel-container::-webkit-scrollbar-thumb,
  .item-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    border: 1px solid #ddd;
  }

  .third-panel-container {
    flex-shrink: 0;
    box-shadow: -5px 0px 5px #0004;
    background-color: #151515;
    height: calc(100vh - 89px);
    width: 350px;
    overflow: auto;
    transition: width 0.3s;
  }

  .third-panel-container.deck-builder {
    width: 500px;
  }

  .item-details {
    width: 100%;
    height: 100%;
  }

  .mobile-close-arrow-button {
    display: none;
  }

  .filter-tray-mobile-exit-overlay {
    display: none;
  }

  @media screen and (max-width: 970px) {
    .index-container{
      display: inherit;
      position: relative;
    }

    .filter-tray {
      position: absolute;
      inset: 0px 0px;
      z-index: 15;
      box-shadow: 10px 0px 10px #000d;
      background: #111;
    }

    .mobile-grouping {
      display: grid;
      grid-template-columns: 1fr 350px;
      height: calc(100vh - 89px);
    }

    .filter-tray__button {
      background-color: #111;
      box-shadow: 10px 0px 10px #0008;
    }

    .filter-tray__button::before {
      box-shadow: 0 25px 0 0px #111;
    }

    .filter-tray__button::after {
      box-shadow: 0 -25px 0 0 #111;
    }

    .filter-tray-mobile-exit-overlay {
      display: initial;
      position: absolute;
      inset: 0 0;
      height: 100%;
      width: 100%;
      cursor: pointer;
      z-index: 11;
    }
  }

  @media screen and (max-width: 720px) {
    .mobile-grouping {
      display: inherit;
    }

    .item-list {
      width: 100%;
    }

    .item-details {
      position: absolute;
      display: grid;
      grid-template-rows: 1fr 50px;
      padding-bottom: 10px;
      inset: 0px 0px;
      transform: translateY(110%);
      transition: 0.3s transform;
      width: 100%;
      height: 100%;
      overflow-y: hidden;
      z-index: 10;
    }

    .item-details.show-item-details {
      transform: translateY(0%);
    }

    .mobile-close-arrow-button {
      display: initial;
      background-color: #222;
      margin: auto;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      z-index: 10;
      width: 80%;
      box-shadow: 10px 0px 10px #0008;
    }
  }

  @media screen and (max-width: 400px) {
    .item-list {
      padding: 0px 10px;
    }
  }
</style>
