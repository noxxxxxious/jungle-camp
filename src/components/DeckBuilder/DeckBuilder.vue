<template>
  <div class="deck-builder-container">
    <div class="deck-builder-title">DECK BUILDER</div>
    <div class="separator"></div>
    <div class="deck-builder-section">
      <div class="section-title-container">
        <div class="section-title">STARTING ITEMS</div>
        <div class="separator"></div>
      </div>
      <div class="section-item-container">
        <ItemContainer v-for="i in 6" :key="'starting-item-' + i"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemContainer from '@/components/DeckBuilder/ItemContainer.vue'

export default {
  components: {
    ItemContainer
  }
}
</script>

<style scoped>
  .deck-builder-container {
    padding: 20px;
    width: 100%;
  }

  .deck-builder-section {
    margin: 10px 0px;
    text-align: center;
  }

  .deck-builder-title {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 10px;
    margin-bottom: 10px;
    user-select: none;
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, #0000, #888, #0000);
  }

  .section-title-container {
    margin: auto;
    display: inline-block;
    letter-spacing: 5px;
    text-align: center;
  }

  .section-title {
    user-select: none;
    margin-bottom: 10px;
  }
</style>