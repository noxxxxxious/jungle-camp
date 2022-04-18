<template>
  <div class="index-container">
    <div ref="filterTray" class="filter-tray show-tray">
      <div class="filter-tray__button-container">
        <div class="filter-tray__button" @click="toggleTray">
          <span v-if="showTray" class="mdi mdi-36px mdi-chevron-left" />
          <span v-else class="mdi mdi-36px mdi-chevron-right" />
        </div>
      </div>
      <div class="filter-tray-contents">
        <div class="filter-tray-title">FILTER</div>
        <div class="separator"></div>
        <div class="filter-tray-list">
          <div v-for="tag in tagList" :key="tag" class="filter-selection">
            <input type="checkbox" class="filter-checkbox" :name="getFilterTrayName(tag)" :id="getFilterTrayName(tag)" @change="changeFilter(getFilterTrayName(tag), tag)">
            <label :for="getFilterTrayName(tag)">{{ tag }}</label>
          </div>
        </div>
        <div class="reset-button-container">
          <div class="reset-button" @click="resetFilters">RESET</div>
        </div>
      </div>
    </div>
    <div v-if="showTray" class="filter-tray-mobile-exit-overlay" @click="toggleTray"></div>
    <div class="mobile-grouping">
      <div class="item-list">
        <ItemCard v-for="item in filteredItemList" :key="item.name" :item="item" @click="selectItem(item)"/>
        <div class="no-items-found" v-if="filteredItemList.length <= 0">No items found...</div>
      </div>
      <div :class="itemDetailsClasses">
        <ItemDetails ref="itemDetails" :item="currentlySelectedItem" @closeDetails="showDetails = false"/>
        <div class="mobile-close-arrow-button" @click="closeDetails">
          <span class="mdi mdi-48px mdi-chevron-down" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemDetails from '@/components/ItemDetails.vue'
const itemList = require('@/assets/predecessor-items.json')

export default {
  name: 'IndexPage',
  components: {
    ItemCard,
    ItemDetails
  },

  data: () => ({
    showTray: true,
    showDetails: false,
    filteredItemList: [...itemList],
    filteredTags: []
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
      this.$store.dispatch('setCurrentlySelectedItem', inItem)
      if(this.showDetails === false) {
        this.showDetails = true
      }
    },

    getFilterTrayName (inTag) {
      return `filter-tray-${inTag.replace(' ', '-')}`.toLowerCase()
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

    tagList() {
      const tagList = []

      this.itemList.forEach((item) => {
        item.tags.forEach((tag) => {
          if (!tagList.includes(tag)) {
            tagList.push(tag)
          }
        })
      })

      return tagList.sort()
    },

    itemDetailsClasses() {
      const classes = ['item-details']
      if (this.showDetails) {
        classes.push('show-item-details')
      }
      return classes.join(' ')
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

  .filter-tray {
    flex-shrink: 0;
    background-color: #151515;
    position: relative;
    width: 0px;
    transition: 0.3s;
    box-shadow: 5px 0px 5px #0004;
    padding: 25px 0px;
    /* overflow-x: auto; */
  }

  .filter-tray.show-tray {
    width: 250px;
    padding: 25px;
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

  .filter-tray-contents {
    max-height: 100vh;
    overflow: hidden;
  }

  .filter-tray-title {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 10px;
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, #0000, #888, #0000);
    margin: 5px 0px;
    width: 100%;
    transition: 0.3s width;
  }

  .filter-tray-list {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .filter-selection {
    user-select: none;
    margin: 2px 0px;
    white-space: nowrap;
  }

  .reset-button-container {
    text-align: center;
  }

  .reset-button {
    display: inline-block;
    border: 1px solid #ddd;
    margin: 10px 0px;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .reset-button:hover {
    cursor: pointer;
    background-color: #ddd;
    color: #222;
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

  .filter-tray-list::-webkit-scrollbar,
  .item-details::-webkit-scrollbar,
  .item-list::-webkit-scrollbar {
    width: 12px;
  }

  .filter-tray-list::-webkit-scrollbar-track,
  .item-details::-webkit-scrollbar-track,
  .item-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    border-radius: 10px;
  }

  .filter-tray-list::-webkit-scrollbar-thumb,
  .item-details::-webkit-scrollbar-thumb,
  .item-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    border: 1px solid #ddd;
  }

  .item-details {
    flex-shrink: 0;
    background-color: #151515;
    width: 350px;
    height: 100%;
    align-self: flex-end;
    box-shadow: -5px 0px 5px #0004;
    overflow: auto;
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
</style>
