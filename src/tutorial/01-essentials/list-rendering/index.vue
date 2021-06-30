<template>
  <h2>用 v-for 把一个数组对应为一组元素</h2>
  <div class="division"><v-for-with-array /></div>

  <h2>在 v-for 里使用对象</h2>
  <div class="division"><v-for-with-object /></div>

  <h2>显示过滤/排序后的结果</h2>
  <div class="division"><display-filtered-sorted-results /></div>

  <h2>在 v-for 里使用值的范围</h2>
  <div class="division"><v-for-with-range /></div>

  <h2>在组件上使用 v-for , 数组更新检测</h2>
  <div class="division"><v-for-with-component /></div>
</template>

<script>
import VForWithArray from './v-for-with-array.vue';
import VForWithObject from './v-for-with-object.vue';
import DisplayFilteredSortedResults from './display-filtered-sorted-results.vue';
import VForWithRange from './v-for-with-range.vue';
import VForWithComponent from './v-for-with-component.vue';

export default {
  components: {
    VForWithArray,
    VForWithObject,
    DisplayFilteredSortedResults,
    VForWithRange,
    VForWithComponent,
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
