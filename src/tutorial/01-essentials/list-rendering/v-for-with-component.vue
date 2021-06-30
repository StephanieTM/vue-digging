<template>
  <div>
    <div class="form">
      <label for="new-todo" class="label">Add a todo</label>
      <el-input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <el-button type="primary" icon="el-icon-plus" @click="addNewTodo">Add</el-button>
    </div>

    <ul>
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        { id: 1, title: 'Do the dishes' },
        { id: 2, title: 'Take out the trash' },
        { id: 3, title: 'Mow the lawn' },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      if (this.newTodoText) {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
        });
        this.newTodoText = '';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  column-gap: 10px;

  .label {
    flex-shrink: 0;
  }
}
</style>
