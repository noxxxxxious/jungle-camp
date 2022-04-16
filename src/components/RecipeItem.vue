<template>
  <div class="item-recipe-container">
    <div class="item-image" @click="selectComponent" :style="`background-image: url('${getImgUrl()}')`">
      <div v-if="recipeIndex > 0" class="hover-stats" >
        <ItemStats :itemObject="itemObject" />
      </div>
    </div>
    <div v-if="hasComponents" class="separator">
      <div class="separator-edge"></div>
      <div class="separator-edge"></div>
    </div>
    <div v-if="hasComponents" class='components-container'>
      <RecipeItem v-for="(component, index) in itemObject.components" :key="`${component.replace(' ', '-')}-componentOf-${itemObject.name.replace(' ', '-')}-${index}`" :itemName="component" :recipeIndex="parseInt(recipeIndex) + 1" />
    </div>
    
  </div>
</template>

<script>
import ItemStats from '@/components/ItemStats.vue'

export default {
  name: 'RecipeItem',

  components: {
    ItemStats
  },

  props: {
    itemName: {
      type: String,
      required: true
    },

    recipeIndex: {
      type: Number,
      required: true
    }
  },

  computed: {
    itemObject () {
      return this.$store.getters.getItemList.filter((item) => {
        return item.name === this.itemName
      })[0]
    },

    hasComponents () {
      const { components } = this.itemObject
      return components && components.length > 0
    },
  },

  methods: {
    selectComponent() {
      this.$store.dispatch('setCurrentlySelectedItem', this.itemObject)
    },

    getImgUrl () {
      return require('@/assets/images/' + this.itemName.replaceAll(' ', '_').replaceAll("'", "")  + '.png')
    },

    setHoverComponent (visible) {
      if (visible) {
        this.$store.dispatch('setCurrentlyHoveredComponent', this.itemObject)
      } else {
        this.$store.dispatch('setCurrentlyHoveredComponent', null)
      }
    }
  }
}
</script>

<style scoped>
  .item-recipe-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0px 2px;
    align-items: center;
  }

  .item-image {
    position: relative;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px 0px;
    user-select: none;
    box-shadow: 0px 0px 10px 10px #0002;
    height: 45px;
    width: 45px;
    background-position: 50% 20%;
    background-size: 130%;
  }

  .item-image:hover {
    cursor: pointer;
    border: 1px solid gold;
    box-shadow: 0px 0px 5px 5px #ffd70022;
  }

  .separator {
    display: flex;
    justify-content: space-between;
    height: 2px;
    background: linear-gradient(to right, #8885, #888, #8885);
    width: 100%;
  }

  .separator-edge {
    height: 10px;
    margin-top: 2px;
    width: 2px;
    background: linear-gradient(to bottom, #8885, #8880)
  }

  .components-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .hover-stats {
    background: #171717;
    position: absolute;
    top: -10px;
    left: -10px;
    transform: translate(-100%, -100%);
    display: none;
    padding: 50px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 1px solid gold;
    z-index: 10;
    box-shadow: 0px 0px 5px 5px #ffd70022;
  }

  .item-image:hover .hover-stats {
    display: initial;
  }
</style>