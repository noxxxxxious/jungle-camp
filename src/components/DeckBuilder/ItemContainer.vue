<template>
  <div class="item-container" :style="itemImageStyle" @drop="onDrop" @dragover.prevent @dragenter.prevent>

  </div>
</template>

<script>
export default {
  data: () => ({
    item: null,
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
    }
  },

  computed: {
    itemImageStyle () {
      if (!this.item) { return '' }
      return `background-image: url('${this.getImgUrl(this.item)}');`
    }
  }
}
</script>

<style scoped>
  .item-container {
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
</style>