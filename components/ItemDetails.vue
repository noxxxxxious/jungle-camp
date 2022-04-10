<template>
  <div class="item-details-container">
    <span v-if="!item">No item selected.</span>
    <div v-else>
      <div class="item-name">{{ item.name.toUpperCase() }}</div>
      <div class="active-or-passive">
        <div v-if="item.tags.includes('Consumable')">CONSUMABLE</div>
        <div v-else-if="item.tags.includes('Active')">ACTIVE</div>
        <div v-else>PASSIVE</div>
      </div>
      <div class="separator"></div>
      <div v-if="item.stats" class="item-stats">
        <div v-if="item.stats['Physical Power']" class="item-stat">
          <span class="item-stat-identifier">Physical Power</span>
          <span class="item-stat-value">{{ item.stats['Physical Power'] }}</span>
        </div>
        <div v-if="item.stats['Magical Power']" class="item-stat">
          <span class="item-stat-identifier">Magical Power</span>
          <span class="item-stat-value">{{ item.stats['Magical Power'] }}</span>
        </div>
        <div v-if="item.stats['Health']" class="item-stat">
          <span class="item-stat-identifier">Health</span>
          <span class="item-stat-value">{{ item.stats['Health'] }}</span>
        </div>
        <div v-if="item.stats['Health Regeneration']" class="item-stat">
          <span class="item-stat-identifier">Health Regeneration</span>
          <span class="item-stat-value">{{ item.stats['Health Regeneration'] }}</span>
        </div>
        <div v-if="item.stats['Physical Armor']" class="item-stat">
          <span class="item-stat-identifier">Physical Armor</span>
          <span class="item-stat-value">{{ item.stats['Physical Armor'] }}</span>
        </div>
        <div v-if="item.stats['Physical Penetration']" class="item-stat">
          <span class="item-stat-identifier">Physical Penetration</span>
          <span class="item-stat-value">{{ item.stats['Physical Penetration'] }}</span>
        </div>
        <div v-if="item.stats['Magical Armor']" class="item-stat">
          <span class="item-stat-identifier">Magical Armor</span>
          <span class="item-stat-value">{{ item.stats['Magical Armor'] }}</span>
        </div>
        <div v-if="item.stats['Mana']" class="item-stat">
          <span class="item-stat-identifier">Mana</span>
          <span class="item-stat-value">{{ item.stats['Mana'] }}</span>
        </div>
        <div v-if="item.stats['Mana Regeneration']" class="item-stat">
          <span class="item-stat-identifier">Mana Regeneration</span>
          <span class="item-stat-value">{{ item.stats['Mana Regeneration'] }}</span>
        </div>
        <div v-if="item.stats['Magical Penetration']" class="item-stat">
          <span class="item-stat-identifier">Magical Penetration</span>
          <span class="item-stat-value">{{ item.stats['Magical Penetration'] }}</span>
        </div>
        <div v-if="item.stats['Lifesteal']" class="item-stat">
          <span class="item-stat-identifier">Lifesteal</span>
          <span class="item-stat-value">{{ item.stats['Lifesteal'] }}</span>
        </div>
        <div v-if="item.stats['Magical Lifesteal']" class="item-stat">
          <span class="item-stat-identifier">Magical Lifesteal</span>
          <span class="item-stat-value">{{ item.stats['Magical Lifesteal'] }}</span>
        </div>
        <div v-if="item.stats['Attack Speed']" class="item-stat">
          <span class="item-stat-identifier">Attack Speed</span>
          <span class="item-stat-value">{{ item.stats['Attack Speed'] }}</span>
        </div>
        <div v-if="item.stats['Critical Chance']" class="item-stat">
          <span class="item-stat-identifier">Critical Chance</span>
          <span class="item-stat-value">{{ item.stats['Critical Chance'] }}</span>
        </div>
        <div v-if="item.stats['Gold Per Second']" class="item-stat">
          <span class="item-stat-identifier">Gold Per Second</span>
          <span class="item-stat-value">{{ item.stats['Gold Per Second'] }}</span>
        </div>
      </div>
      <div v-if="item.descriptions" class="item-descriptions">
        <div v-for="(description, index) in item.descriptions" :key="`${item.name}_description${index}`" class="item-description">
          <span class="item-description-type">{{ description.descriptionType }}: </span>
          <span class="item-description">{{ description.description }}</span>
        </div>
      </div>
      <div class="item-cost-container">
        <span class="mdi mdi-coins item-cost" />
        <span class="item-cost">{{ item.cost }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .item-details-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .item-name {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 10px;
  }

  .active-or-passive {
    margin: 10px 0px;
    text-align: center;
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, #0000, #888, #0000);
  }

  .item-stats {
    padding: 0px 40px;
    margin: 20px 0px;
  }

  .item-stat {
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
  }

  .item-descriptions {
    padding: 0px 10px;
  }

  .item-description {
    margin: 10px 0px;
  }

  .item-description-type {
    color: goldenrod;
  }

  .item-cost-container {
    text-align: center;
  }

  .item-cost {
    color: gold;
  }
</style>
