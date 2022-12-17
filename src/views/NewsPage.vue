<template>
  <div class="container">
    <ArticleSection 
      title="Updates to Item Page"
      subheading="More Filters, Fixes, &amp; Thanks"
      date="2022/12/06"
    >
      <h1>Filters &amp; Fixes</h1>
      <p>An Aura filter has been added to the Items page. This should show anything that gives stats simply for being around the player with that item. This does not include anything that affects nearby allies or enemies on-hit. In addition, I've double checked and fixed the item components for the last few items in the list, as well as Terminus' description, which still had the description from the stress test.</p>
      <h1>Thank you!</h1>
      <p>Thanks to everyone who has reached out and suggested filters, told me about bugs and things that needed to be fixed, as well as everyone who has been using this resource! A little under 1000 people have been using this, which is awesome!</p>

      <p>As always, if you have any feature requests or find any issues with anything, please shoot me a message on Discord. You can find my info at the bottom of the page!</p>
      <div style="text-align:right">
        <em>See you on the battlefield.<br>-noxxxxxious
        </em>
      </div>
    </ArticleSection>
    <ArticleSection 
      title="Items Updated for Early Access"
      subheading="Crests Only Actives, Additional Filters, & The Future"
      date="2022/11/30"
    >
      <h1>Hi, everyone!</h1>
      <p>I figured this would be a good place to make some announcements about the site, as well as keep track of changes to items and other things about the game as we go. There are more features I'd like to add, but they will likely come slowly. I plan on eventually open sourcing it for those who won't mind dealing with my junior level code. 😅 For now, I'd like to use this space to make updates on changes to the items as we go, as well as do some community spotlights among other things.</p>
      <h1>Crests Are The Only Actives</h1>
      <p>One of the biggest changes going from the previous stress test to EA is tier 3 crests being the only actives. You will select a crest at the beginning of the game, and depending on the crest, have to complete specific goals to upgrade it, such as dealing damage to enemy units while a teammate is nearby. Once the tier 1 and tier 2 quests have been completed, you can head back to base to be able to choose 1 of 3 legendary crests with active abilities. You can see what these are by filtering for actives on the items page.</p>
      <h1>A Few Liberties</h1>
      <p>I took a few liberties with a couple of the item active and passive descriptions, namely adding missing punctuation and the order in which the passives and actives appear. For example, Nex describes its active "Reap" first, which uses stacks of "Sow", before explaining what Sow is. I have simply reversed the order of these so you learn about Sow before Reap which uses it.</p>
      <p>I've also added a few extra filters, like On-Hit and When-hit, to see items which have those effects. If you see any items that are missing stats or should be seen when a filter is on but isn't, please shoot me a message on Discord! My information is at the bottom of the screen.</p>
      <h1>The Last Few Items</h1>
      <p>I am not 100% certain of the build paths on the last 6 or so items as I was unable to look them up. The passive descriptions and stats are accurate, so it's just the build path. Once the game goes live, I will double check these and update them if need be, so please keep that in mind while looking at Demolisher through Imperator (Oblivion Crown is accurate, however).</p>
      <div style="text-align:right">
        <em>See you on the battlefield.<br>-noxxxxxious
        </em>
      </div>
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

  p::first-letter {
    margin-left: 50px;
  }
</style>