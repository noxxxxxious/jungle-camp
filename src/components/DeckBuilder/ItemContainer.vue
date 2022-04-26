<template>
  <div class="item-container" @drop="onDrop" @dragover.prevent @dragenter.prevent>

  </div>
</template>

<script>
export default {
  methods: {
    onDrop (event) {
      event.preventDefault()
      const data = event.dataTransfer.getData("text")
      const cardName = data.split('-')
      cardName.shift()
      console.log(cardName.join(' '))
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
  }
</style>