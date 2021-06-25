<template>
  <h2>计算属性</h2>
  <div class="division"><Computed /></div>

  <h2>计算属性缓存 vs 方法</h2>
  <div class="division"><ComputedVSMethods /></div>

  <h2>Setter & Getter</h2>
  <div class="division"><SetterAndGetter /></div>
</template>

<script>
import Computed from './computed.vue';
import ComputedVSMethods from './computed-vs-methods.vue';
import SetterAndGetter from './setter-and-getter.vue';

export default {
  components: {
    Computed,
    ComputedVSMethods,
    SetterAndGetter,
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
