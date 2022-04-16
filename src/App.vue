<template>
  <div class="app-wrapper">
    <div class="header">The Jungle Camp</div>
      <div class="main">
        <router-view/>
      </div>
    <div class="footer">Discord: noxxxxxious#7568</div>
  </div>
</template>

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

  .header {
    padding: 20px;
    padding-left: 75px;
    background-color: #202020;
    box-shadow: 0px 5px 5px #0004;
    z-index: 5;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .footer {
    background-color: #202020;
    padding: 1px 20px;
    text-align: right;
    z-index: 5;
  }
</style>
