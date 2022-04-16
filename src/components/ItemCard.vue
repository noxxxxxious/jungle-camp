<template>
  <div class="card-container" :style="`background-image: url('${getImgUrl()}')`">
    <div class="card-container-overlay"></div>
    <div class="item-glance-details">
      <div class="item-name">
        {{ item.name }}
      </div>
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
  },

  methods: {
    getImgUrl () {
      return require('@/assets/images/' + this.item.name.replaceAll(' ', '_').replaceAll("'", "")  + '.png')
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
    background-position: center;
    background-size: contain;
    overflow: hidden;
    box-shadow: 0px 0px 10px 10px #0002;
  }

  .card-container-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle 100px at center 160px, #2220, #2220, #111);
    background-repeat: no-repeat;
  }

  .card-container:hover {
    box-shadow: 0px 0px 5px 5px #ffd70022;
    border: solid gold 1px;
  }

  .item-glance-details {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .item-name {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: bold;
  }

  .active-or-passive {
    color: #999;
  }

  .item-cost-container {
    text-align: center;
  }

  .item-cost {
    color: gold;
  }
</style>
