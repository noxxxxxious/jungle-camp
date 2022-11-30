<template>
  <div class="header">
    <span class="site-title">The Jungle Camp</span>
    <nav>
      <div class="nav-buttons">
        <router-link to="/" class="button" active-class="active">News</router-link>
        <router-link to="/items" class="button" active-class="active">Items</router-link>
        <!-- <router-link to="/heroes" class="button" active-class="active">Heroes</router-link>
        <router-link to="/builder" class="button" active-class="active">Builder</router-link>
        <router-link to="/decks" class="button" active-class="active">Decks</router-link> -->
      </div>
      <!-- <a class="button button--discord" href="https://discord.com/oauth2/authorize?client_id=985091844658561026&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify">
        <img class="discord-logo" src="@/assets/images/Discord_Logo.svg">
        <span>Log in with Discord</span>
      </a> -->
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
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }

  .nav-buttons {
    display: flex;
  }

  ul {
    /* display: inline-block; */
    list-style: none;
    margin: 0;
  }

  a {
    all: unset;
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