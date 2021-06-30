<template>
  <h2>v-if</h2>
  <div class="division"><VIf /></div>

  <h2>v-show</h2>
  <div class="division"><VShow /></div>
</template>

<script>
import VIf from './v-if.vue';
import VShow from './v-show.vue';

export default {
  components: {
    VIf,
    VShow,
  },
}
</script>

<style lang="scss" scoped>
.division {
  border: 5px lightpink dashed;
  border-radius: 10px;
  padding: 20px;
}
</style>
