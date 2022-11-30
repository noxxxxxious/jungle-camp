<template>
  <div class="container">
    <ArticleSection 
      title="Items Updated for Early Access"
      subheading="Crests Only Actives, Additional Filters, & The Future"
    >
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 1.5rem;">Hi, everyone!</span> I figured this would be a good place to make some announcements about the site, as well as keep track of changes to items and other things about the game as we go. There are more features I'd like to add, but they will likely come slowly. I plan on eventually open sourcing it for those who won't mind dealing with my junior level code. 😅</p>
      <h1>Crests Are Only Actives</h1>
      <p>One of the biggest changes going from the previous stress test to EA is tier 3 crests being the only actives. You will select a crest at the beginning of the game, and depending on the crest, have to complete specific goals to upgrade it, such as dealing damage to enemy units while a teammate is around. Once the tier 1 and tier 2 quests have been completed, you can head back to base to be able to choose 1 of 3 legendary crests with active abilities.</p>
    </ArticleSection>
  </div>
</template>

<script setup>
// import { reactive } from 'vue';
import ArticleSection from '@/components/NewsBlog/ArticleSection.vue'

// const articles = reactive([
//   {
//     title: 'Community Spotlight: joeyoungfitz',
//     subheading: 'Gameplay Guides, Theory, and High Level Gameplay',
//     mediaLink: 'https://www.youtube.com/embed/3rGaC1Ou_SY',
//     content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
//       <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
//       <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
//       <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
//   },
//   {
//     title: 'Early Access Date Announced',
//     subheading: 'Paid Early Access',
//     mediaLink: null,
//     content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
//       <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
//       <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
//       <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
//   },
//   {
//     title: 'Community Spotlight: AMedkit',
//     subheading: 'Hero Kits, Talk Shows, and Critiques',
//     mediaLink: 'https://www.youtube.com/embed/Yl5baiWAm-Y',
//     content: `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum magni, voluptas cupiditate culpa, ullam, repellendus ipsum impedit sequi quasi at necessitatibus excepturi labore accusamus natus sunt nihil fuga laboriosam. Tempore odit ullam dolorem nesciunt reprehenderit non adipisci debitis facilis minima possimus autem eligendi eaque ipsa distinctio animi voluptatum ab ad asperiores, minus architecto, totam accusamus impedit facere et. Iste!</p>
//       <p>Nihil magni ea autem voluptatem aliquid, enim earum sunt ducimus culpa atque esse, at molestiae animi dignissimos tempore nam. Eius beatae atque rerum neque odit praesentium, alias quia nulla sit?</p>
//       <p>Magni dolore praesentium itaque quas eius, officiis nemo laudantium explicabo consequuntur sit quae rerum accusantium obcaecati iste sapiente quidem placeat illum quo voluptas. Illum quaerat numquam magni beatae iure quasi! Rerum explicabo repellendus, doloribus quod nisi quae voluptate eaque cupiditate repellat, aliquam voluptas obcaecati nostrum porro distinctio minima eos voluptatum architecto fugiat. Temporibus qui aspernatur culpa vitae dolore. Ullam, id?</p>
//       <p>Sapiente molestias fugit doloribus reprehenderit impedit dolore quod repellendus ut omnis magnam est rerum iure odit quis, laborum asperiores obcaecati nostrum ex. Odit ex aliquam voluptates, temporibus dolorem pariatur atque.</p>`
//   },
// ])
</script>

<style scoped>
  .container {
    margin: auto;
    height: 100%;
    overflow-y: auto;
    background: url('@/assets/images/news-header-jungle01.webp') center cover;
  }
</style>