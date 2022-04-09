<template>
  <div>
    {{ item ? item.name : "No item selected."}}
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
