<template>
  <div>
    {{ item ? item.name : "No item selected."}}<br>
    {{ item }}
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

<style>

</style>
