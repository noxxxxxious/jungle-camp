<template>
  <div class="app-wrapper">
    <SiteHeader />
      <div class="main">
        <router-view/>
      </div>
    <div class="footer">Discord: noxxxxxious#7568 | Hire me as a front end developer!</div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
export default {
  components: {
    SiteHeader
  },

  beforeMount() {
    //Check if login cookie exists
    //Only 1 cookie, so we can simply separate on '=' without needing to search through other cookies
    //Then split on . to get the payload
    //Decode from base64 and parse the JSON
    const splitCookie = document.cookie.split('=')
    if (splitCookie.length > 1 && splitCookie[0] === 'access_token'){
      const userInfo = JSON.parse(atob(splitCookie[1].split('%20')[1].split('.')[1]))
      this.$store.dispatch('setUserInfo', userInfo)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  .app-wrapper {
    position: relative;
    display: grid;
    grid-template-rows: 69px calc(100vh - 89px) 20px;
    background: #282828;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: #ddd;
  }

  .footer {
    background-color: #202020;
    padding: 2px 20px;
    text-align: right;
    z-index: 20;
  }
</style>
