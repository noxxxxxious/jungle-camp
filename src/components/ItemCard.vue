<template>
  <div class="card-container">
    <div class="item-name">
      {{ item.name }}
    </div>
    <div class="item-glance-details">
      <div class="active-or-passive">
        <span v-if="item.tags.includes('Consumable')">Consumable</span>
        <span v-else-if="item.tags.includes('Active')">Active</span>
        <span v-else>Passive</span>
      </div>
      <div class="item-cost-container">
        <span class="mdi mdi-circle-multiple-outline item-cost" />
        <span class="item-cost">{{ item.cost }}</span>
      </div>
    </div>
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
    position: relative;
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white 1px;
    margin: 20px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background: #333;
    cursor: pointer;
    user-select: none;
  }

  .card-container:hover {
    background: #363636;
  }

  .item-glance-details {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .item-cost-container {
    text-align: center;
  }

  .item-cost {
    color: gold;
  }
</style>
