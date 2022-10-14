<template>
  <div class="container">
    <ArticleSection 
      v-for="article in articles"
      :key="article.title"
      :articleInfo="article"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ArticleSection from '@/components/NewsBlog/ArticleSection.vue'

const articles = reactive([
  {
    title: 'Community Spotlight: joeyoungfitz',
    subheading: 'Gameplay Guides, Theory, and High Level Gameplay',
    mediaLink: 'https://www.youtube.com/embed/3rGaC1Ou_SY',
    content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
      <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
      <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
      <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
  },
  {
    title: 'Early Access Date Announced',
    subheading: 'Paid Early Access & Battlepass',
    mediaLink: null,
    content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
      <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
      <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
      <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
  },
  {
    title: 'Community Spotlight: AMedkit',
    subheading: 'Hero Kits, Talk Shows, and Critiques',
    mediaLink: 'https://www.youtube.com/embed/Yl5baiWAm-Y',
    content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
      <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
      <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
      <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
  },
])
</script>

<style scoped>
  .container {
    margin: auto;
    height: 100%;
    overflow-y: auto;
    background: url('@/assets/images/news-header-jungle01.webp') center cover;
  }
</style>