<template>
  <div class="deck-builder-container">
    <div class="deck-builder-title">DECK BUILDER</div>
    <div class="separator"></div>
    <div class="build-sections">
      <BuildSection title="starting items" :startingItems="true"/>
      <BuildSection title="main build" />
      <BuildSection title="variation one" />
      <BuildSection title="variation two" />
    </div>
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

  .deck-builder-title {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 10px;
    margin-bottom: 10px;
    user-select: none;
  }

  .build-sections {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
</style>