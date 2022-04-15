<template>
  <div class="item-recipe-container">
    <div class="item-name" @click="selectComponent">
      <div v-for="namePiece in itemObject.name.split(' ')" :key="namePiece">
        {{ namePiece }}
      </div>
    </div>
    <div v-if="hasComponents" class="separator">
      <div class="separator-edge"></div>
      <div class="separator-edge"></div>
    </div>
    <div v-if="hasComponents" :class="componentsContainerClasses">
      <RecipeItem v-for="component in itemObject.components" :key="`${component.replace(' ', '-')}-componentOf-${itemObject.name.replace(' ', '-')}`" :itemName="component" :recipeIndex="recipeIndex + 1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeItem',

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

    componentsContainerClasses () {
      const classes = ['components-container']
      if (this.recipeIndex > 0) {
        classes.push('stacked-recipes')
      }
      return classes.join(' ')
    }
  },

  methods: {
    selectComponent() {
      this.$store.dispatch('setCurrentlySelectedItem', this.itemObject)
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

  .item-name {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px 0px;
    user-select: none;
  }

  .item-name:hover {
    cursor: pointer;
    background: #ccc;
    color: #222;
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

  .stacked-recipes {
    flex-direction: column;
  }
</style>