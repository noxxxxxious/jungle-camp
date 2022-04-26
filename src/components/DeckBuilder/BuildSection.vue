<template>
  <div class="deck-builder-section">
    <div class="section-title-container">
      <div class="section-title">{{ title.toUpperCase() }}</div>
      <div class="separator"></div>
    </div>
    <div class="section-item-container">
      <ItemContainer v-for="i in 6" :key="'starting-item-' + i" @onitemchange="(itemCost) => { updateCost(itemCost, i) }"/>
    </div>
    <div :class="remainingGoldClasses">
      <span class="mdi mdi-circle-multiple-outline item-cost" />
      <span class="item-cost">{{ Math.abs(remainingStartingGold) }}</span>
    </div>
  </div>
</template>

<script>
import ItemContainer from '@/components/DeckBuilder/ItemContainer.vue'

export default {
  components: {
    ItemContainer
  },

  data: () => ({
    itemCosts: new Array(6).fill(0)
  }),

  props: {
    title: {
      required: true,
      type: String
    },

    startingItems: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateCost (inItemCost, itemCostIndex) {
      console.log(inItemCost, itemCostIndex)
      this.itemCosts[itemCostIndex] = inItemCost
    }
  },

  computed: {
    remainingStartingGold() {
      return 500 - this.itemCosts.reduce((preVal, curVal) => preVal + curVal, 0)
    },

    remainingGoldClasses() {
      if (this.remainingStartingGold >= 0) {
        return 'remaining-gold-ok'
      } else {
        return 'remaining-gold-error'
      }
    }
  }
}
</script>

<style scoped>
  .section-title-container {
    margin: auto;
    display: inline-block;
    letter-spacing: 5px;
    text-align: center;
  }

  .section-title {
    user-select: none;
    margin-bottom: 10px;
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, #0000, #888, #0000);
  }

  .remaining-gold-ok {
    color: gold;
  }

  .remaining-gold-error {
    color: red;
  }
</style>