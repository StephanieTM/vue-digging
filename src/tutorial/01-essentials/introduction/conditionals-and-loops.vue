<template>
  <h3>v-if</h3>
  <div>
    <el-button @click="toggleSeen">{{seen ? '隐藏' : '展示'}}</el-button>
    <div class="text" v-if="seen">现在你看到我了</div>
  </div>

  <h3>v-for</h3>
  <ol>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      todos: [
        { id: 1, text: 'Learn JavaScript' },
        { id: 2, text: 'Learn Vue' },
        { id: 3, text: 'Build something awesome' },
      ],
    };
  },
  methods: {
    toggleSeen() {
      this.seen = !this.seen;
    },
  },
}
</script>

<style scoped lang="scss">
.text {
  font-size: 14px;
  margin: 10px 0;
}
</style>
