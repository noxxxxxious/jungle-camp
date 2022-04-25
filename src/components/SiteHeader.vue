<template>
  <div class="header">
    <span class="site-title">The Jungle Camp</span>
    <nav>
      <ul>
        <li ref="itemDescBtn" class="button active" @click="navChange('itemDescriptions')">Item Descriptions</li>
        <li ref="deckBuilderBtn" class="button" @click="navChange('deckBuilder')">Deck Builder</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  emits: ['navclick'],

  methods: {
    navChange (inButton) {
      if (inButton === 'itemDescriptions') {
        this.$refs.deckBuilderBtn.classList.remove('active')
        this.$refs.itemDescBtn.classList.add('active')
      } else if (inButton === 'deckBuilder') {
        this.$refs.itemDescBtn.classList.remove('active')
        this.$refs.deckBuilderBtn.classList.add('active')
      }
      this.$store.dispatch('setCurrentView', inButton)
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    padding: 20px;
    padding-left: 75px;
    background-color: #202020;
    box-shadow: 0px 5px 5px #0004;
    z-index: 20;
    justify-content: space-between;
  }

  .site-title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  .button {
    margin: 0px 10px;
    display: inline-block;
    border: 1px solid #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    user-select: none;
  }

  .button:hover {
    color: #222;
    background-color: #ddd;
    box-shadow: 0px 0px 5px 5px #ffd70022;
    cursor: pointer;
  }

  .button.active {
    color: #222;
    background-color: #ddd;
  }

  .button.active:hover {
    cursor: initial;
    box-shadow: none;
  }

</style>