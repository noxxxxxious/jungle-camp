<template>
  <div class="app-wrapper">
    <SiteHeader />
      <div class="main">
        <router-view/>
      </div>
    <div class="footer">Discord: noxxxxxious#7568</div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
export default {
  components: {
    SiteHeader
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
    padding: 1px 20px;
    text-align: right;
    z-index: 20;
  }
</style>
