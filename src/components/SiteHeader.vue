<template>
  <div class="header">
    <span class="site-title">The Jungle Camp</span>
    <nav>
      <div v-if="userInfo" class="logged-in-menu">
        <ul>
          <li ref="itemDescBtn" class="button active" @click="navChange('itemDescriptions')">Item Descriptions</li>
          <li ref="deckBuilderBtn" class="button" @click="navChange('deckBuilder')">Deck Builder</li>
        </ul>
        <div class="user-banner">
          <span>{{ userInfo.name }}</span>
          <img :src="`https://cdn.discordapp.com/avatars/${ userInfo.discordId }/${ userInfo.avatar }.jpg?size=64`" >
        </div>
      </div>
      <div v-else class="not-logged-in-menu">
        <a class="button button--discord" href="https://discord.com/oauth2/authorize?client_id=985091844658561026&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify">
          <img class="discord-logo" src="@/assets/images/Discord_Logo.svg">
          <span>Log in with Discord</span>
        </a>
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
    align-items: center;
  }

  .site-title {
    font-weight: bold;
    font-size: 1.5rem;
  }

  nav {
    flex-grow: 1;
  }

  .logged-in-menu {
    display: flex;
    justify-content: space-between;
  }

  ul {
    /* display: inline-block; */
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

  .user-banner {
    height: 31px;
    display: flex;
    align-items: center;
  }

  .user-banner img {
    height: 50px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: 10px;
  }

  .not-logged-in-menu {
    display: flex;
    justify-content: flex-end;
  }

  .button--discord {
    display: flex;
    gap: 5px;
    border-color: #5865F2;
    background-color: #5865F2;
    color: white;
    text-decoration: none;
    align-content: center;
  }

  .button--discord:hover {
    color: #fff;
    background-color: #717cf3;
    box-shadow: 0px 0px 5px 5px #5865F222;
    cursor: pointer;
  }

  .discord-logo {
    height: 20px;
  }

</style>