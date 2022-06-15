<template>
  <div class="header">
    <span class="site-title">The Jungle Camp</span>
    <nav>
      <div v-if="userInfo">
        <ul>
          <li ref="itemDescBtn" class="button active" @click="navChange('itemDescriptions')">Item Descriptions</li>
          <li ref="deckBuilderBtn" class="button" @click="navChange('deckBuilder')">Deck Builder</li>
        </ul>
        <div class="user-banner">
          <span>{{ userInfo.name }}#{{ userInfo.discriminator }}</span>
          <img :src="`https://cdn.discordapp.com/avatars/${ userInfo.discordId }/${ userInfo.avatar }.jpg`" >
        </div>
      </div>
      <div v-else>
        <a href="https://discord.com/oauth2/authorize?client_id=985091844658561026&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify">Log in with Discord</a>
      </div>
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
  },

  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo
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