<template>
  <h2>绑定 HTML Class</h2>
  <ClassBinding />

  <h2>绑定内联样式</h2>
  <StyleBinding />
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
</style>
