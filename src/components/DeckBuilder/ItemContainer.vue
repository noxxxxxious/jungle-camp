<template>
  <div :class="itemContainerStyles" :style="itemImageStyle" @drop="onDrop" @dragover.prevent @dragenter.prevent>
    <div class="remove-item-button" @click="removeItem">
      <span class="mdi mdi-24px mdi-close-box-outline"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: null,
    hoveredItem: null,
    hasDropped: false
  }),

  methods: {
    onDrop (event) {
      event.preventDefault()
      const data = event.dataTransfer.getData("text")

      // remove "card-" from element ID
      const cardName = data.split('-')
      cardName.shift()

      this.item = this.getItem(cardName.join(' '))
    },

    getItem (inItemName) {
      return this.$store.getters.getItemList.filter((item) => inItemName === item.name)[0]
    },

    getImgUrl (inItem) {
      return require('@/assets/images/' + inItem.name.replace(/\s/g, '_').replace(/'/g, "")  + '.png')
    },

    removeItem () {
      this.item = null
    }
  },

  computed: {
    itemImageStyle () {
      if (!this.item && !this.hoveredItem) { return '' }
      if (this.hoveredItem) {
        return `background-image: url('${this.getImgUrl(this.hoveredItem)}');`
      } else {
        return `background-image: url('${this.getImgUrl(this.item)}');`
      }
    },

    itemContainerStyles  () {
      const classes = ['item-container']
      if (this.item) {
        classes.push('has-item')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
  .item-container {
    position: relative;
    display: inline-block;
    margin: 10px 5px;
    height: 60px;
    width: 60px;
    border: solid white 1px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #333;
    background-position: 50% 20%;
    background-size: 130%;
  }

  .remove-item-button {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
  }

  .remove-item-button:hover {
    cursor: pointer;
  }

  .item-container.has-item:hover  .remove-item-button {
    display: initial;
  }

  .remove-item-button .mdi {
    color: #ddd;
  }
</style>