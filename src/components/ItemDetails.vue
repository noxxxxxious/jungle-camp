<template>
  <div class="item-details-container">
    <span v-if="!item">No item selected.</span>
    <div class="item-details" v-else>
      <ItemStats :itemObject="item" />
      <div v-if="hasComponents" class="item-components">
        <div class="components-headline">COMPONENTS</div>
        <div class="separator"></div>
        <RecipeItem :itemName="item.name" :recipeIndex="0" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue'
import ItemStats from '@/components/ItemStats.vue'

export default {
  props: {
    item: {
      type: [Object, null]
    }
  },

  components: {
    RecipeItem,
    ItemStats
  },

  computed: {
    hasComponents () {
      const { components } = this.item
      return components && components.length > 0
    }
  }
}
</script>

<style scoped>
  .item-details-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .item-details-container::-webkit-scrollbar {
    width: 12px;
  }

  .item-details-container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
    border-radius: 10px;
  }

  .item-details-container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    border: 1px solid #ddd;
  }

  .item-details {
    max-height: 100%;
  }

  .item-components {
    margin-top: 20px;
  }

  .components-headline {
    text-align: center;
  }
</style>
