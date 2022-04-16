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
    <div class="item-list">
      <ItemCard v-for="item in filteredItemList" :key="item.name" :item="item" @click="selectItem(item)"/>
    </div>
    <div class="item-details">
      <ItemDetails :item="currentlySelectedItem" />
    </div>
    <!-- <div class="recipe-hover-details"></div> -->
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
    }
  },

  computed: {
    itemList() {
      return this.$store.getters.getItemList
    },

    currentlySelectedItem() {
      return this.$store.getters.getCurrentlySelectedItem
    },

    tagList () {
      const tagList = []

      this.itemList.forEach((item) => {
        item.tags.forEach((tag) => {
          if (!tagList.includes(tag)) {
            tagList.push(tag)
          }
        })
      })

      return tagList.sort()
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

  .filter-tray-list::-webkit-scrollbar,
  .item-list::-webkit-scrollbar {
    width: 12px;
  }

  .filter-tray-list::-webkit-scrollbar-track,
  .item-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    border-radius: 10px;
  }

  .filter-tray-list::-webkit-scrollbar-thumb,
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
  }
</style>
