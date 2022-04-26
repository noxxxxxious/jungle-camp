<template>
  <div class="deck-builder-container">
    <div class="deck-builder-title">DECK BUILDER</div>
    <div class="separator"></div>
    <BuildSection title="starting items" :startingItems="true"/>
  </div>
</template>

<script>
import BuildSection from '@/components/DeckBuilder/BuildSection.vue'

export default {
  components: {
    BuildSection
  }
}
</script>

<style scoped>
  .deck-builder-container {
    padding: 20px;
    width: 100%;
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, #0000, #888, #0000);
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
</style>