<template>
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
          <input type="checkbox" class="filter-checkbox" :name="getFilterTrayName(tag)" :id="getFilterTrayName(tag)" @change="$emit('onfilterchange', getFilterTrayName(tag), tag)">
          <label :for="getFilterTrayName(tag)">{{ tag }}</label>
        </div>
      </div>
      <div class="reset-button-container">
        <div class="reset-button" @click="resetFilters">RESET</div>
      </div>
    </div>
  </div>
  <div v-if="showTray" class="filter-tray-mobile-exit-overlay" @click="toggleTray"></div>
</template>

<script>
export default {
  emits: ['onfilterchange', 'onfilterreset'],

  data: () => ({
    showTray: true
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

    getFilterTrayName (inTag) {
      return `filter-tray-${inTag.replace(' ', '-')}`.toLowerCase()
    },

    resetFilters () {
      this.$emit('onfilterreset')
    }
  },

  computed: {
    tagList() {
      const tagList = []

      this.$store.getters.getItemList.forEach((item) => {
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
  .filter-tray {
    flex-shrink: 0;
    background-color: #151515;
    position: relative;
    width: 0px;
    transition: 0.3s;
    box-shadow: 5px 0px 5px #0004;
    padding: 25px 0px;
    user-select: none;
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
    user-select: none;
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

  .filter-tray-list::-webkit-scrollbar{
    width: 12px;
  }

  .filter-tray-list::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    border-radius: 10px;
  }

  .filter-tray-list::-webkit-scrollbar-thumb{
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    border: 1px solid #ddd;
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

  @media screen and (max-width: 970px) {
    .filter-tray {
      position: absolute;
      inset: 0px 0px;
      z-index: 15;
      box-shadow: 10px 0px 10px #000d;
      background: #111;
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
</style>