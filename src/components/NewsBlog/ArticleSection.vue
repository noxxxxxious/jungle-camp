<template>
  <div class="article-container">
    <div class="article-heading">
      <h1>{{ title }}</h1>
      <h3>{{ subheading}}</h3>
      <h5>{{ date }}</h5>
    </div>
    <div class="divider"></div>
    <!-- <div v-if="articleInfo.mediaLink" class="article-media">
      <iframe class="article-video" width="100%" height="auto" :src="articleInfo.mediaLink">
      </iframe> 
    </div> -->
    <div class="article-content" ref="contentElement">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// eslint-disable-next-line
const props = defineProps(['title', 'subheading', 'date'])

const contentElement = ref(null)

// onMounted(() => {
//   contentElement.value.innerHTML = props.articleInfo.content
// })
</script>

<style scoped>
  .article-container {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 750px;
    background-color: #353535;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3);
  }

  .article-heading {
    position: relative;
    padding: 20px;
    background-color: #151515;
    background-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%), url('@/assets/images/news-header-jungle01.webp');
    background-size: cover;
    background-position-y: 35%;
  }

  h1 {
    margin: 0;
    text-shadow: 0px 0px 5px #ffd700aa;
  } 
  
  h3 {
    margin: 0;
    color: #aaa;
  }

  h5 {
    position: absolute;
    margin: 0;
    margin-right: 5px;
    bottom: 0;
    right: 0;
    color: #aaa;
  }

  .divider {
    height: 3px;
    background-color: gold;
    box-shadow: 0px 5px 5px #ffd70044;
    z-index: 5;
    margin-bottom: 10px;
  }

  .article-media {
    margin: auto;
    position: relative;
    width: 90%;
    height: 0;
    padding-bottom: 56.25%;
  }

  iframe {
    border: none;
  }

  .article-content {
    padding: 20px;
  }

  .article-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  p::first-letter {
    margin-left: 50px;
  }

  @media screen and (max-width: 800px){
    .article-container {
      max-width: 100%;
      background-color: #353535;
      border-top-left-radius: 0px;
      border-bottom-right-radius: 0px;
      overflow: hidden;
      box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.3);
    }
  }
</style>