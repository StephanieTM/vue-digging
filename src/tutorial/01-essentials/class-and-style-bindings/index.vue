<template>
  <h2>绑定 HTML Class</h2>
  <div class="division"><ClassBinding /></div>

  <h2>绑定内联样式</h2>
  <div class="division"><StyleBinding /></div>
</template>

<script>
import ClassBinding from './class-binding.vue';
import StyleBinding from './style-binding.vue';

export default {
  components: {
    ClassBinding,
    StyleBinding,
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
