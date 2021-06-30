<template>
  <ul>
    <!-- 可以用 of 或 in -->
    <!-- <li v-for="(todo, index) of todoList" :key="todo.id"> -->
    <li v-for="(todo, index) in todoList" :key="todo.id">
      {{index+1}} {{todo.content}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { id: '001', content: 'Meet Cindy at Café at 9 tonight.' },
        { id: '002', content: 'Do the dishes tomorrow morning.' },
        { id: '003', content: 'Finish the report by Mar 17th.' },
      ],
    };
  },
}
</script>
