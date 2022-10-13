<template>
  <div class="container">
    <div class="article-heading">
      <h1>Community Spotlight: joeyoungfitz</h1>
      <h3>Gameplay Guides, Theory, and High Level Gameplay</h3>
    </div>
    <div class="divider"></div>
    <div class="article-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas, voluptatem, quae consequatur quibusdam suscipit quia eius exercitationem eum, rerum consectetur ipsam ipsum doloremque blanditiis assumenda mollitia architecto soluta quod!</p></div>
  </div>
</template>

<script setup>
// const contentTest = '<textarea>test</textarea>'
</script>

<style scoped>
  .container {
    max-width: 1024px;
    background-color: #333;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    overflow: hidden;
  }

  .article-heading {
    padding: 20px;
    background-color: #151515;
  }

  h1 {
    margin: 0;
    text-shadow: 0px 0px 5px #ffd70055;
  } 
  
  h3 {
    margin: 0;
    color: #aaa;
  }

  .divider {
    height: 3px;
    background-color: #252525;
    ;
  }

  .article-content {
    padding: 20px;
  }

  p {
    margin: 0;
  }

  .p::first-letter {
    margin-left: 50px;
  }
</style>