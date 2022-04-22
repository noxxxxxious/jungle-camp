<template>
  <div id="hover-details" class="hover-item-details">
    <ItemStats />
  </div>
</template>

<script>
import ItemStats from '@/components/ItemStats.vue'

export default {
  components: {
    ItemStats
  },

  mounted() {
    document.addEventListener('mousemove', (event) => {
      const hoverEl = document.getElementById('hover-details')
      hoverEl.style.left = (event.pageX - hoverEl.offsetWidth - 20) + 'px'
      hoverEl.style.top = (event.pageY - hoverEl.offsetHeight - 20) + 'px'
    })
  }
}
</script>

<style scoped>
  .hover-item-details {
    position: absolute;
    min-width: 100px;
    min-height: 100px;
    background: #666;
    /* transform: translate(-100%, -100%); */
  }
</style>