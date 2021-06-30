<template>
  <h2>声明式渲染</h2>
  <div class="division"><DeclarativeRendering /></div>

  <h2>处理用户输入</h2>
  <div class="division"><HandlingUserInput /></div>

  <h2>条件与循环</h2>
  <div class="division"><ConditionalsAndLoops /></div>
</template>

<script>
import DeclarativeRendering from './declarative-rendering.vue';
import HandlingUserInput from './handling-user-input.vue';
import ConditionalsAndLoops from './conditionals-and-loops.vue';

export default {
  components: {
    DeclarativeRendering,
    HandlingUserInput,
    ConditionalsAndLoops,
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
