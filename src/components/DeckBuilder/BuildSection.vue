<template>
  <div class="deck-builder-section">
    <div class="section-title-container">
      <div class="section-title">{{ title.toUpperCase() }}</div>
      <div class="separator"></div>
    </div>
    <div class="section-item-container">
      <ItemContainer
        v-for="i in 6"
        :key="'starting-item-' + (i - 1)"
        :id="`${title.replace(/\s/g, '-').replace(/'/g, '')}-item-${i - 1}`"
        :item="items[i - 1]"
        @onitemchange="(itemName) => { updateItems(itemName, i - 1) }"
      />
    </div>
    <div v-if="startingItems" :class="remainingGoldClasses">
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
    items: new Array(6).fill(null)
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
    updateItems (inItemName, itemIndex) {
      if(!inItemName) {
        this.items[itemIndex] = null
        return
      }
      console.log(inItemName, itemIndex)
      const item = this.$store.getters.getItemList.filter((item) => item.name === inItemName)[0]
      this.items[itemIndex] = item
    }
  },

  computed: {
    remainingStartingGold() {
      let itemCosts = 500
      this.items.forEach((item) => {
        if(item){
          itemCosts -= item.cost
        }
      })
      return itemCosts
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
  .deck-builder-section {
    margin: 20px 0px;
    text-align: center;
  }

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

  @media screen and (max-height: 760px) {
    .deck-builder-section {
      margin: 5px 0px;
    }
  }
</style>