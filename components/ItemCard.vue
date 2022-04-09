<template>
  <div class="card-container">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .card-container {
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white 1px;
    margin: 20px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background: #282828;
    cursor: pointer;
    user-select: none;
  }

  .card-container:hover {
    background: #333333;
  }
</style>
