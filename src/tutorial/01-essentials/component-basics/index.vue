<template>
  <h2>通过 Prop 向子组件传递数据, 监听子组件事件</h2>
  <div class="division"><data-passing-and-event-listening /></div>
</template>

<script>
import DataPassingAndEventListening from './data-passing-and-event-listening.vue';

export default {
  components: {
    DataPassingAndEventListening,
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
